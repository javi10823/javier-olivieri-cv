import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, "..");
const outputPath = resolve(projectRoot, "docs/screenshot.png");

const URL = process.env.SCREENSHOT_URL ?? "https://cv-javier-olivieri-ai-consultant.netlify.app/";

async function main(): Promise<void> {
  await mkdir(dirname(outputPath), { recursive: true });

  const browser = await chromium.launch();
  try {
    const ctx = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 1,
    });
    const page = await ctx.newPage();
    await page.goto(URL, { waitUntil: "networkidle" });
    await page.evaluate(async () => {
      await (document as Document & { fonts: { ready: Promise<unknown> } }).fonts.ready;
    });
    // small settle for any post-load animations / pulse
    await page.waitForTimeout(500);
    await page.screenshot({
      path: outputPath,
      fullPage: false,
      type: "png",
    });
    console.log(`✔ Screenshot saved → ${outputPath}`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
