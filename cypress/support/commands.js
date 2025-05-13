// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.visit('http://127.0.0.1:8000/admin'); // Assuming '/admin' is your login page
    cy.get('#id_username').type(username);
    cy.get('#id_password').type(password);
    cy.get('input[value="Log in"]').click();
  });

Cypress.Commands.add('addUsers', (createUsername, createPassword, verifyPassword) => {
    cy.login('admin', 'admin');
  });

Cypress.Commands.add('addCategory', (nameCategory) => {
    cy.login('admin', 'admin');
    cy.get('#content-main > div.app-products.module > table > tbody > tr.model-category > td:nth-child(2) > a').click();
    cy.get('#id_name').type(nameCategory); //lokasi harus dalam js path di ambil dalam kurungnya saja document.querySelector("INI YANG DIAMBIL")
    cy.get('#category_form > div > div > input.default').click();
  });