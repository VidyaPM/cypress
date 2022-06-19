/// <reference types="cypress" />

const custFirstName = "Jack_ ";
const custLastName = "Mill_ ";
const email = "jack_mill_ ";
const password = "jackie&007_ ";
const firstName = "MrJack_ ";
const lastName = "Millie_ ";
const address = "Mesuem Road_ ";
const city = "New York";
const postcode = "10014";
const mobileNo = +19172746166;
const myAddress = "#98 building, NY_ ";


it("automation practice test", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.contains("'Your Logo").should("be.visible");
})

//create new account
it("create new account", () => {
    cy.get('.header_user_info > .login').click();
    cy.contains('Create an account').should('exist');
    cy.contains('Email address').should("be.visible");
    cy.get(("#email_create")).type("input[name=email_create]", email);
    cy.get("#SubmitCreate").click();
})

it("check for account creation form", () => {
    cy.get("#account-creation_form").should('be.visible');
    cy.contains("Your personal information").should('exist');
})

//personal information details
it("enter personal information", () => {
    let number = Math.floor((Math.random() * 1000000) + 1);
    cy.get("#customer_firstName").type(`${custFirstName}${number}`);
    cy.get("#customer_lastName").type(`${custLastName}${number}`);
    cy.get("#email").type(`${email}${number}` + "@gmail.com");
    cy.get("#passwd").type(`${password}${number}`);
    cy.get("#firstname").type(`${firstName}${number}`);
    cy.get("#lastname").type(`${lastName}${number}`);
    cy.get("#address1").type(`${address}${number}`);
    cy.get("#city").type(`${city}${number}`);
    cy.get("#uniform-id_state").click();
    cy.contains("New York").click();
    cy.get("#postcode").type(`${city}${number}`);
    cy.get("#id_country").contains("United States").click();
    cy.get("#phone_mobile").type(`${mobileNo}${number}`);
    cy.get("#alias").type(`${myAddress}${number}`);
    cy.get("#submitAccount").click();
})

//check for my account created successfully
it("enter personal information", () => {
    cy.get("#center_column")
    .contains("My account")
    .should("be.visible");
})

