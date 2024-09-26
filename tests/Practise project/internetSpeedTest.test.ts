import { test, expect } from "@playwright/test"
import { parse } from "path";

test("Internet speed test", async ({ page }) => {
    await page.goto("https://www.speedtest.net");
    await page.click("span.start-text");
    await page.waitForTimeout(60000);
    await page.waitForSelector("(//div[@class='result-data u-align-left']//span)[1]", { timeout: 90000 });
    const speedText = await page.locator("(//div[@class='result-data u-align-left']//span)[1]").textContent();
    const speed = parseFloat(speedText);
    console.log(speed)
    expect(speed).toBeGreaterThan(80);
})