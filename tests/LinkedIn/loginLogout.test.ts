import test from "@playwright/test"

test("LoginLogout", async ({ page }) => {
    await page.goto("https://www.linkedin.com/");
    await page.click("a.nav__button-secondary.btn-secondary-emphasis.btn-md");
    await page.fill("#username", "****");
    await page.fill("#password", "****");
    await page.click("//button[@type='submit']");
    await page.fill("//div[@class='msg-overlay-list-bubble-search__input-container']//input[1]", "Sohrab Shaikh");
    await page.click("//div[contains(@class,'display-flex overflow-hidden')]");
    // await page.click("(//div[@class='msg-overlay-list-bubble__message-snippet-container--narrow-two-line']//p)[1]");
    // await page.click("(`text=${Sohrab Shaikh}`)");
    await page.fill("//div[@class='flex-grow-1 relative']//div[1]", "Hi, This is an automated message");
    await page.click("(//div[contains(@class,'msg-form__right-actions display-flex')]//button)[1]");


    await page.click("//span[text()='Me']");
    await page.click("#ember18");
    // await page.waitForTimeout(60000);
})