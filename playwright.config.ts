import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
    headless: false,
    screenshot: "on",
    video: "on"
  },
  timeout: 60000,
  retries: 0,
  reporter: [
    ["dot"],
    ["json", { outputFile: "jsonReports/jsonReport.json" }],
    ["html", { open: "never" }]
  ],
  // Added multiple browser projects here
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
      },
    },
    // {
    //   name: 'firefox',
    //   use: {
    //     browserName: 'firefox',
    //   },
    // },
    // {
    //   name: 'webkit',
    //   use: {
    //     browserName: 'webkit',
    //   },
    // }
  ]
};

export default config;
