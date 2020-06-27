/// <reference types="cypress" />

context('Timer', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Displays Box Breathing steps correctly', () => {
    cy.contains("Breathe in");
    cy.wait(4000)
    cy.contains("Hold");
    cy.wait(4000)
    cy.contains("Breathe out");
    cy.wait(4000)
    cy.contains("Hold");
  })
})
