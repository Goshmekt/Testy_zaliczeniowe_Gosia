/// <reference types="cypress"/>

beforeEach('setup', () => {
    cy.viewport(1440, 1080);
    cy.visit('https://www.onet.pl');
    cy.url().should('contain', 'onet');
    
})

// Test 9
it('Wyszukiwanie na stronie w Szukaj Politechniki Białostockiej ', () => {
    cy.visit('https://www.onet.pl');
    cy.get('.Search_button__oKxuf').click();
    //cy.get('.Shortcuts_shortcutsJakDojade__xXI8e').contains('Jak dojadę').click();
    //cy.url().should('include', 'jakdojade')
})
