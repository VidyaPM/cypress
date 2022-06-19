function toPromise(chain) {
    return new Promise(((resolve, reject) => {
        Cypress.on('fail', rejectPromise);
 
        return chain.then(subject => resolvePromise(subject));
 
        function rejectPromise(error) {
            reject(error);
            Cypress.off('fail', rejectPromise);
        }
 
        function resolvePromise(subject) {
            resolve(subject);
            Cypress.off('fail', rejectPromise);
        }
    }));
}
 
before(() => {
    cy.visit('/', { log: false });
  });
 
beforeEach(() => {
    Cypress.Cookies.defaults({
        preserve: (cookie) => {
          return true;
        }
      });
    cy.visit('/', { log: false });
  });
 

afterEach(() => {
    cy.clearCookies();
});