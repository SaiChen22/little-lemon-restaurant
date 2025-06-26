import getToday from '../../src/utils/getToday';

describe('The Table Reservation page', () => {
  beforeEach(() => {
    cy.visit('/table-reservation');
  });

  it('enters valid information and clicks submit', () => {
    cy.get('#time').select('18:00');
    cy.get('#guests').clear().type('2');
    cy.get('#time').should('have.value', '18:00');
    cy.get('#guests').should('have.value', '2');
    cy.get('#submit').should('not.be.disabled');

    cy.get('#submit').click();
    cy.url().should('include', '/reservation-success');
    cy.get('[data-testid="success-message"]').should(
      'include.text',
      getToday() + ' at 18:00'
    );
  });

  it('enters invalid information and shows an error', () => {
    cy.get('#guests').clear();
    cy.get('[data-testid="guests-error"]').should(
      'have.text',
      'guests is a required field'
    );
    cy.get('#submit').should('be.disabled');

    cy.get('#guests').type('2');
    cy.get('#submit').should('not.be.disabled');
  });
});
