/// <reference types="cypress" />

const email = "jack_mill";

it("automation practice test", () => {
    cy.visit("http://automationpractice.com/index.php");
})

it("check for create account", () => {
    cy.get('.login').click();
    cy.contains('Create an account').should('exist');
    cy.contains('Email address').should("be.visible");
})

//enter already existed email address
it("enter already registered email address", () => {
    cy.get("#email").click();
    cy.get("input[name=email_create].type(email)");
    cy.get("#SubmitCreate").click();
    cy.wait(2000);
})

//account error message
it("shows error message", () => {
    cy.get("#create_account_error")
        .contains("An account using this email address has already been registered. Please enter a valid password or request a new one.")
        .should("be.visible");
})