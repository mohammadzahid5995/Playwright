import { test } from "@playwright/test";


test("Window Test", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
    console.log(page.url());

    // const [newWindow] = await Promise.all([

    //     page.waitForEvent("popup"),
    //     page.click("'Follow On Twitter'")

    // ])
    // console.log(newWindow.url());

    const [multi] = await Promise.all([
        page.waitForEvent('popup'),
        page.click("#followboth")
    ])

    await multi.waitForLoadState();
    const pages = multi.context().pages();
    console.log("No. of pages: " + pages.length)

    pages.forEach(tab => {
        console.log(tab.url());
    })

})