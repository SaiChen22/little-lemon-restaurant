describe('The Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders Header and Footer', () => {
    cy.get('header').should('be.visible');
    cy.get('footer').should('be.visible');
  });

  it('renders the Main sections', () => {
    cy.get('section').should('have.length', 4);
  });

  it('renders logo and illustrations', () => {
    cy.get('[data-testid="header-logo"]')
      .invoke('prop', 'naturalWidth')
      .should('be.greaterThan', 0);
    cy.get('[data-testid="hero-illustration"]')
      .invoke('prop', 'naturalWidth')
      .should('be.greaterThan', 0);
  });

  it('navigates to Table Reservation from Hero', () => {
    cy.get('[data-testid="reserve"]').click();
    cy.url().should('include', '/table-reservation');
    cy.get('[data-testid="reservation"]').should('have.class', 'text-yellow');
  });

  it('navigates to Table Reservation from Navbar', () => {
    cy.get('[data-testid="reservation"]').click();
    cy.url().should('include', '/table-reservation');
    cy.get('[data-testid="reservation"]').should('have.class', 'text-yellow');
  });

  it('navigates to under-construction pages from Navbar', () => {
    cy.get('[data-testid="menu"]').click();
    cy.url().should('include', '/menu');
    cy.get('[data-testid="menu"]').should('have.class', 'text-yellow');

    cy.get('[data-testid="orderOnline"]').click();
    cy.url().should('include', '/order-online');
    cy.get('[data-testid="orderOnline"]').should('have.class', 'text-yellow');

    cy.get('[data-testid="login"]').click();
    cy.url().should('include', '/login');
    cy.get('[data-testid="login"]').should('have.class', 'text-yellow');
  });
});
