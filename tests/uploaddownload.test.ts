import test from "@playwright/test";


// test("download upload", async ({ page }) => {
//     await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
//     await page.type("#textbox", "zahid");
//     await page.click("#create");


//     const [download] = await Promise.all([
//         page.waitForEvent("download"),
//         page.click("#link-to-download")
//     ])

//     const fileName = await download.suggestedFilename;
//     await download.saveAs("fileName");
// })


test("upload", async ({ page }) => {
    page.goto("https://blueimp.github.io/jQuery-File-Upload/");

    const [uploadFiles] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.click("input[type='file']")
    ])

    uploadFiles.setFiles(["C:/Users/ansar/Pictures/Screenshots/Screenshot 2024-09-04 214529.png", "C:\\Users\\ansar\\Downloads\\download.jpeg"]);
})