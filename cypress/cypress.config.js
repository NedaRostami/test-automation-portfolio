const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: true,
  screenshotOnRunFailure: true,
  retries: { runMode: 1, openMode: 0 },

  // مسیر خروجی نتایج آلور
  env: {
    allure: true,
    allureResultsPath: 'cypress/allure-results',
  },

  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {
      // نویسنده‌ی آلور باید اینجا رجیستر شود
      require('@shelex/cypress-allure-plugin/writer')(on, config);
      return config;
    },
  },
});
