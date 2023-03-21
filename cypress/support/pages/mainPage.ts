import BasePage from "./basePage";

export default class MainPage extends BasePage {
    protected selectors = {
        pageLogo: '.logo-wrapper > svg',
        searchBar: 'input[data-test-id="quick-search"]',
        followers: '//span[text()="3.2M Followers"]',
        localBtn: '.sg-header-localization',
        accountBtn: '.sg-header-my-pages-button',
        latestViewIcon: '[id="Icon/eye"]',
        likedBtn: '.sg-header-like-button',
        cartBtn: '[data-test-id="features.sitelayout.header.cart"]',
        headerMenu: '.sg-header-menu-container',
        footerColumns: 'div.footer-sustainability-columns',
        paymentMethods: '[data-test-id="features.footer.paymentMethods"]',
    };

    checkPageElementsVisibility(): void {
        let selectorsToBeChecked = this.getSelectorsToBeChecked(this.selectors);
        this.getElemenstByArrayAndCheckVisibility(selectorsToBeChecked);
    }
}
