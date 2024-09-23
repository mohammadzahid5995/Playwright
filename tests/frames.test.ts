import { test, expect } from "@playwright/test";


test("Frames", async ({ page }) => {
    await page.goto("https://letcode.in/frame");
    // const allFrames = page.frames();
    // console.log("Frames: " + allFrames.length);

    // const myFrame = page.frame("firstFr");
    // await myFrame?.fill("input[name='fname']", "Zahid");
    // await myFrame?.fill("input[name='lname']", "Ansari");

    // expect(myFrame?.locator("p.title.has-text-info")).toContainText('You have entered');


    // await page.waitForTimeout(3000);


    const frame = page.frameLocator("//div[@class='card-content']//iframe[1]");
    await frame.locator("input[name='fname']").fill("Zahid");
    await frame.locator("input[name='lname']").fill("Ansari");

    const innerFrame = frame.frameLocator("//div[contains(@class,'container has-text-centered')]//iframe[1]");
    await innerFrame.locator("input[name='email']").fill("zahid.test@gmail.com");

    await page.waitForTimeout(5000);
})