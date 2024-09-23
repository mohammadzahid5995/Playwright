import { Page } from "@playwright/test";


export default class LoginPage{

    constructor(public page:Page){}

    async enterEmail(emailaddress: string){
        await  this.page.fill("input[name='email']", emailaddress)
    }
    async enterPassword([password]: string){
        await  this.page.fill("input[name='password']", password)
    }
    async clickLoginBtn(emailaddress: string){
        await  this.page.fill("input[name='email']", emailaddress)
    }


}