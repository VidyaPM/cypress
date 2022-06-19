declare namespace Cypress{
    interface Chainable<Subject>{
        toPromise(): Promise<Subject>;
        textToPromise(): Promise<string>;
        dataCy(text: string): Chainable<Subject>;
        injectAxeCore(): Chainable<Subject>;
    }
}