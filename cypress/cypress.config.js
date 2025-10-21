
import allureWriter from '@shelex/cypress-allure-plugin/writer.js';

export default {
  e2e: {
    setupNodeEvents(on, config) {
      // فعال‌سازی نویسنده‌ی نتایج Allure
      allureWriter(on, config);
      return config;
    },
    baseUrl: 'https://www.saucedemo.com',
    video: true,
    screenshotOnRunFailure: true,
    retries: 1,
    viewportWidth: 1366,
    viewportHeight: 768
  },
  // ❌ این‌ها را نگذار:
  // reporter: 'allure',
  // reporterOptions: { ... }

  // ✅ تنظیمات محیطی Allure
  env: {
    allure: true,
    allureResultsPath: 'allure-results',
    // بعد از هر spec نتایج را نگه دارد (برای اجرای موازی/چند spec)
    allureReuseAfterSpec: true
  }
};
