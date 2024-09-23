import { expect, test } from "@playwright/test";


test("Test Basic Interactions", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageInput = page.locator("input[placeholder='Please enter your Message']");
    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message");
    console.log("Before entering data: " + await messageInput.inputValue())
    await messageInput.fill("Hi Zahid")
    console.log("After entering data: " + await messageInput.inputValue())

})

test("Sum", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    page.fill("#sum1", "120");
    page.fill("#sum2", "10");
    page.click("form#gettotal>button");
    await page.waitForTimeout(5000);
    const result = page.locator("#addmessage");
    console.log("SUM: " + await result.textContent());
    let expectedResult = 130;
    expect(result).toHaveText("" + expectedResult)

})

test.only("CheckBox", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    const checkedBox = page.locator("#isAgeSelected");
    expect(checkedBox).not.toBeChecked;
    await checkedBox.check();
    expect(checkedBox).toBeChecked;

})