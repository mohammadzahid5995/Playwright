import test from "@playwright/test";


test("Test Calender", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    await page.click("input[placeholder='Start date']");

    const mmYY = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]");
    const prev = page.locator("(//th[@class='prev'])[1]");
    const next = page.locator("(//th[@class='next'])[1]");


    let date = "March 2024";

    while (await mmYY.textContent() != date) {
        await prev.click();
        page.click("(//td[@class='day'])[3]");
    }


    await page.waitForTimeout(3000);
})



