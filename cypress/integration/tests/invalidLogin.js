// <reference types="cypress" />

const email = "daniel_star";
const password = "daniel&star268";

it("automation practice test", () => {
    cy.visit("http://automationpractice.com/index.php");
})

it("check for already registered", () => {
    cy.get('.login').click();
    cy.contains('Already registered?').should('exist');
    cy.contains('Email address').should("be.visible");
})

//enter invalid email address and password 
it("incorrect login details entered", () => {
    cy.get("#email").click();
    cy.get("input[name=email_create].type(email)");
    cy.get("input[name=passwd].type(password)");
    cy.get("#SubmitCreate").click();
    cy.wait(2000);
})

//Authentication error message
it("shows error message", () => {
    cy.get('h1').contains("Authentication");
    cy.get('.alert-danger').contains("There is 1 error");
    cy.contains('Authentication failed').should("be.visible");
})