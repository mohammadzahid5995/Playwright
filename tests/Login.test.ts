import { chromium, test } from "@playwright/test";


test("Login test demo", async ({ page }) => {


    await page.goto("https://ecommerce-playground.lambdatest.io/")
    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]")
    await page.click("'Login'")

    await page.fill("input[name='email']", "koushik350@gmail.com")
    await page.fill("input[type='password']", "Pass123$")
    await page.click("input[value='Login']")

    // await page.waitForTimeout(5000)
})

