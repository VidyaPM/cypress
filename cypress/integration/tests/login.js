/// <reference types="cypress" />

it("automation practice test", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.contains("'Your Logo").should("be.visible")
    cy.wait(4000);
})