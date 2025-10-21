// cypress/e2e/auth/login-negative.cy.js
import { LoginPage } from '../../pages/login.page';

const loginPage = new LoginPage();

// متن‌های ارور SauceDemo (ثابت و قابل تکیه)
const MSG = {
  locked: 'Sorry, this user has been locked out.',
  missingUser: 'Username is required',
  missingPass: 'Password is required',
  badCreds: 'Username and password do not match any user in this service'
};

describe('Auth: negative cases', () => {
  it('fails with wrong password for valid user', () => {
    loginPage.login('standard_user', 'wrong_password');
    loginPage.assertErrorContains(MSG.badCreds);
  });

  it('fails with wrong username for valid password', () => {
    loginPage.login('not_a_real_user', 'secret_sauce');
    loginPage.assertErrorContains(MSG.badCreds);
  });

  it('fails when username is empty', () => {
    // یوزرنیم خالی
    loginPage.login(undefined, 'secret_sauce');
    loginPage.assertErrorContains(MSG.missingUser);
  });

  it('fails when password is empty', () => {
    // پسورد خالی
    loginPage.login('standard_user', undefined);
    loginPage.assertErrorContains(MSG.missingPass);
  });

  it('locked_out_user shows locked message (already have happy/locked? fine, keep it here for completeness)', () => {
    loginPage.login('locked_out_user', 'secret_sauce');
    loginPage.assertErrorContains(MSG.locked);
  });
});
