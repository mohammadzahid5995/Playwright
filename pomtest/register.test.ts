import { test, expect } from "@playwright/test";
import RegisterPage from "../pages/registerPage";


test("Register user", async ({ page, baseURL }) => {
    const register = new RegisterPage(page);
    await page.goto(`${baseURL}route=account/register`);
    await register.enterFirstName("Zahid");
    await register.enterLastName("Ansari");
    await register.enterEmail("test1212@gmail.com");
    await register.enterTelephone("1234567890");
    await register.enterPassword("zahid");
    await register.enterConfirmedPassword("zahid");
    // expect(register.subscribe()).toBeChecked();
    await register.termsandcondition();
    await register.proceed();
    await page.waitForTimeout(5000);


})