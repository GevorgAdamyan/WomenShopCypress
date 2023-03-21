import BasePage from "./basePage";

export default class LoginPage extends BasePage {
    protected selectors = {
        pageLogo: '.logo-wrapper > svg',
        emailField: 'input[name="email"]',
        passwordField: 'input[name="password"]',
        loginBtn: '#submit-login',
    };

    checkPageElementsVisibility(): void {
        let selectorsToBeChecked = this.getSelectorsToBeChecked(this.selectors);
        this.getElemenstByArrayAndCheckVisibility(selectorsToBeChecked);
    }

    async signIn(email: string, password: string): Promise<void> {
        this.typeText(this.selectors.emailField, email);
        this.typeText(this.selectors.passwordField, password);
        this.clikOnElement(this.selectors.loginBtn);
    }
}
