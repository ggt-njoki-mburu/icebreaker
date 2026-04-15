describe('Icebreaker', () => {

    beforeEach(() => {
        cy.visit('http://localhost:5173')
    })
  it('should show categories on the home page', () => {

  cy.get('[data-cy="category-card"]',{timeout:2000}).should('have.length.greaterThan',0)
  })

  it('should navigate through cards and return home', () => {

  cy.get('[data-cy="category-card"]', {timeout:2000}).should('have.length.greaterThan',0);
cy.wait(1500);

  cy.get('[data-cy="category-card"]').first().click();
  cy.wait(2000);

  cy.contains('Next').click();
  cy.wait(1500);

  cy.contains('Previous').click();
  cy.wait(1500);

  cy.contains('Back').click();
  cy.wait(1500);

  cy.url().should('include','localhost:5173')

  cy.get('[data-cy="category-card"]').should('be.visible')
  })
});