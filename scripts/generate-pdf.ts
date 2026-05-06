import { spawn, type ChildProcess } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium, type Browser } from "playwright";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, "..");
const outputPath = resolve(projectRoot, "public/cv.pdf");

const PORT = 4321;
const PRINT_URL = `http://127.0.0.1:${PORT}/print`;

async function waitForServer(url: string, timeoutMs = 30_000): Promise<void> {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // not ready yet
    }
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error(`Server at ${url} did not become ready in ${timeoutMs}ms`);
}

async function main(): Promise<void> {
  await mkdir(dirname(outputPath), { recursive: true });

  console.log(`▶ Starting astro preview on port ${PORT}...`);
  const server: ChildProcess = spawn(
    "pnpm",
    ["exec", "astro", "preview", "--port", String(PORT), "--host", "127.0.0.1"],
    {
      cwd: projectRoot,
      stdio: ["ignore", "pipe", "pipe"],
      env: { ...process.env, FORCE_COLOR: "0" },
    },
  );

  server.stdout?.on("data", (d) => process.stdout.write(`[preview] ${d}`));
  server.stderr?.on("data", (d) => process.stderr.write(`[preview] ${d}`));

  let browser: Browser | undefined;
  try {
    await waitForServer(PRINT_URL);
    console.log("✔ Preview ready. Launching Chromium...");

    browser = await chromium.launch();
    const ctx = await browser.newContext();
    const page = await ctx.newPage();

    await page.goto(PRINT_URL, { waitUntil: "networkidle" });
    await page.evaluate(async () => {
      await (document as Document & { fonts: { ready: Promise<unknown> } }).fonts.ready;
    });

    console.log(`▶ Generating PDF → ${outputPath}`);
    await page.pdf({
      path: outputPath,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: "0", right: "0", bottom: "0", left: "0" },
    });

    console.log("✔ PDF generated.");
  } finally {
    if (browser) await browser.close();
    server.kill("SIGTERM");
    await new Promise((r) => setTimeout(r, 200));
    if (!server.killed) server.kill("SIGKILL");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
