import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 400 } });
await page.goto("http://localhost:3000");
await page.waitForLoadState("networkidle");
await page.screenshot({ path: "/tmp/claude-1000/-home-game-1-projects-2-outsouce-2-landingpage/47e209af-375c-4ad9-9258-a45d6e511026/scratchpad/header.png" });
await browser.close();
