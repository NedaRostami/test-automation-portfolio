
# Test Automation Portfolio (Cypress + Allure)

**Stack:** Cypress 15, Allure, GitHub Actions, ESLint/Prettier  
**Scope:** UI (Sauce Demo), API (reqres), Reporting, CI

## Structure
cypress/
e2e/ (auth, cart, api)
pages/
fixtures/
support/


## Scripts
- `npm run cy:open` – run interactive
- `npm run cy:run` – run headless
- `npm run report:gen` – Allure HTML

## CI
- Headless Chrome on Ubuntu
- Artifacts: Allure HTML, videos on failure


