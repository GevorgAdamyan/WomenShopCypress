
type SelectorObject = { [key: string]: string };

export default abstract class BasePage {
    protected abstract selectors: SelectorObject;

    abstract checkPageElementsVisibility(): void;

    protected findElement(selector: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(selector)
    }

    protected clikOnElement(selector: string, force?: boolean): void {
        if (force) {
            this.findElement(selector).click({ force: force })
        } else {
            this.findElement(selector).click()
        }
    }

    protected typeText(selector: string, text: string): void {
        let field = this.findElement(selector);
        field.click().type(text)
    }


    protected getElemenstByArrayAndCheckVisibility(selectors: string[]): void {
        for (let i = 0; i < selectors.length; i++) {
           this.findElement(selectors[i]).should('be.visible')
        }
    }

    protected getSelectorsToBeChecked(selectors: SelectorObject, selectorsToExclude?: string | string[]): string[] {
        const selectorsToBeChecked: string[] = [];
        if (selectorsToExclude) {
            const excludeArray = Array.isArray(selectorsToExclude) ? selectorsToExclude : [selectorsToExclude];
            Object.keys(selectors).forEach(key => {
                if (!excludeArray.some(selector => selector === key)) {
                    selectorsToBeChecked.push(selectors[key]);
                }
            });
        } else {
            Object.values(selectors).forEach(selector => selectorsToBeChecked.push(selector));
        }

        return selectorsToBeChecked;
    }
}
