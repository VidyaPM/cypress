/// <reference types="cypress" />

it("automation practice test", () => {
    cy.visit("http://automationpractice.com/index.php");
})

//Sign In with registered account - email & password taken from from cypess.env.json file
it("login with already registered account", () => {
    cy.get('.login').click();
    cy.get("#login_form").contains("Already registered?");
    cy.get("#email").click();
    cy.get("input[name=email].type(email)");
    cy.get("#passwd").click();
    cy.type("input[name=passwd].type(`${password}{enter}");
    cy.get(SubmitLogin).click();
});

//check for successfully logged-in with already registered details
it("enter personal information", () => {
    cy.get("#center_column")
        .contains("My account")
        .should("be.visible");
    cy.get('.info-account')
        .contains("Welcome to your account. Here you can manage all of your personal information and orders.")
})