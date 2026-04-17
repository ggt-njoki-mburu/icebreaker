describe("Icebreaker", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("should show categories on the home page", () => {
    cy.get('[data-cy="category-card"]', { timeout: 10000 })
      .should("have.length.greaterThan", 0);
  });

  it("should navigate through cards and return home", () => {
   
    cy.get('[data-cy="category-card"]', { timeout: 10000 })
      .should("have.length.greaterThan", 0);

   
    cy.get('[data-cy="category-card"]').first().click();

    
    cy.get('[data-cy="next-question"]', { timeout: 10000 })
      .should("exist");

    
    cy.get('[data-cy="next-question"]')
      .should("be.visible")
      .and("not.be.disabled")
      .click();

    
    cy.get('[data-cy="previous-question"]')
      .should("be.visible")
      .and("not.be.disabled")
      .click();

    
    cy.contains("Back").should("be.visible").click();

    
    cy.url().should("eq", "http://localhost:5173/");

    
    cy.get('[data-cy="category-card"]').should("be.visible");
  });
});