describe('webdemosqa', () => {
  it('Testing webdemosqa can be opened', () => {
    cy.visit('http://127.0.0.1:8000/')
      .get('h1')
      .should('have.text', 'The install worked successfully! Congratulations!');
  });
  it('Testing webdemosqa login', () => {
    cy.login('admin', 'admin'); // Use the custom command
    cy.get('h1').should('have.text', 'Welcome to Demo SQA Testing Portal');

    // Or, assert that the URL changes to a logged-in page
    // cy.url().should('include', '/dashboard');
  });
  it('Add users webdemosqa', () => {
    cy.login('admin', 'admin'); // Use the custom command for login
    cy.get('.model-user > :nth-child(2) > .addlink').click();
  });
  it('Add category webdemosqa', () => {
      cy.addCategory('Makanan');
    });
});