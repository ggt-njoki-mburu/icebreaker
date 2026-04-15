describe('Basic Cypress Test', () => {
  it('visits the app', () => {
  cy.visit('http://localhost:5173')
  cy.contains('Icebreaker App');
  });
});