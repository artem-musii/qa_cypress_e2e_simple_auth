/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.login('tomsmith', 'SuperSecretPassword!');
    cy.url().should('include', 'secure');
  });

  it('should not allow to log in with invalid creds', () => {
    cy.login('Invalid Username', 'Invalid Password');
    cy.get('.error').should('exist');
  });

  it('should allow to logout', () => {
    cy.login('tomsmith', 'SuperSecretPassword!');
    cy.get('[href="/logout"]').click();
  });
});
