import { Page } from "@playwright/test";

export default class RegisterPage {

    constructor(public page: Page) { }

    async enterFirstName(firstname: string) {
        await this.page.fill("input[name='firstname']", firstname)
    }
    async enterLastName(lastname: string) {
        await this.page.fill("input[name='lastname']", lastname)
    }
    async enterEmail(email: string) {
        await this.page.fill("input[name='email']", email)
    }
    async enterTelephone(telephone: string) {
        await this.page.fill("input[type='tel']", telephone)
    }
    async enterPassword(password: string) {
        await this.page.fill("input[name='password']", password)
    }
    async enterConfirmedPassword(password: string) {
        await this.page.fill("input[name='confirm']", password)
    }
    async subscribe() {
        return await this.page.locator("#input-newsletter-no").isChecked();
    }
    async termsandcondition() {
        return await this.page.click("(//label[@class='custom-control-label'])[3]");
    }
    async proceed() {
        await this.page.click("input[type='submit']")
    }

}