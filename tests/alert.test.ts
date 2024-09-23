import { test, expect } from "@playwright/test";


// test("handleAlert", async ({ page }) => {
//     await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

//     page.on("dialog", async (alert) => {
//         const text = alert.message();
//         console.log(text);
//         await alert.accept();
//     })

//     await page.waitForTimeout(10000);
//     await page.locator("button:has-text('Click Me')").nth(0).click();
//     await page.waitForTimeout(5000);
// })


// test.("handleAlert1", async ({ page }) => {
//     await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

//     page.on("dialog", async (alert) => {
//         const text1 = alert.message();
//         console.log(text1);
//         await alert.dismiss();
//         const text2 = page.locator("#confirm-demo")
//         expect(text2).toContainText('Cancel!');
//     })

//     await page.locator("button:has-text('Click Me')").nth(1).click();

// })


// test("handleAlert3", async ({ page }) => {
//     await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

//     page.on("dialog", async (alert) => {
//         console.log(alert.defaultValue());
//         await alert.accept('Zahid');
//         expect(page.locator("#prompt-demo")).toContainText("Zahid");
//     })

//     await page.locator("button:has-text('Click Me')").nth(2).click();
// })


// Todo:
// test("Modal Alert", async ({page}) => {
//     page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
// })



test.only("Dropdown", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#select-demo", {
        // label: "Tuesday"
        // value: "Tuesday"
        index: 2
    })
    await page.waitForTimeout(5000);

    await page.selectOption("#multi-select", [{
        value: "Ohio"
    }, {
        index: 2
    }, {
        label: "Florida"
    }
    ])
    await page.waitForTimeout(5000)
})

