/// <reference types="cypress" />

context("Timer", () => {
  beforeEach(() => {
    cy.clock();
    cy.visit("/");
  });

  it("Displays Box Breathing steps correctly", () => {
    cy.contains("Breathe in");
    cy.tick(4000);
    cy.contains("Hold");
    cy.tick(4000);
    cy.contains("Breathe out");
    cy.tick(4000);
    cy.contains("Hold");
  });
});
