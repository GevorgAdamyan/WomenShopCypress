import * as App from '../support/pages/application';
import { credentials } from '../support/data/data';

describe('Test Login feature', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should login with valid crededntials', () => {
        App.loginPage.checkPageElementsVisibility();
        App.loginPage.signIn(credentials.correctTestEmail, credentials.correctPassword);
        App.mainPage.checkPageElementsVisibility();
    })
})