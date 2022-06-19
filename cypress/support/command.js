Cypress.Commands.add("Login", () => {
    cy.log("login");
    const username = Cypress.env("username");
    const password = Cypress.env("Password");
    const baseURL = Cypress.env("baseUrl");
    cy.task("login", { username: username, password: password, baseURL: baseURL }, { log: false }).then(cookies => {
      cookies.forEach((cookie) => {
          cy.setCookie(cookie.name, cookie.value, {
              domain: cookie.domain,
              expiry: cookie.expires,
              httpOnly: cookie.httpOnly,
              path: cookie.path,
              secure: cookie.secure,
              log: false
          });
      });
  });
  cy.visit("http://automationpractice.com/index.php", { log: false,  timeout: 160000 });
  });
   
  Cypress.Commands.add("Logout", () => {
    cy.clearCookie(" ");
  });
  Cypress.Commands.add("CustomLog", (message) => {
    Cypress.log({
      name: 'LOG',
      message: '[' + new Date().toTimeString() + '] ' + message
    });
  });