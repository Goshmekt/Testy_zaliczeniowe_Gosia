/// <reference types="cypress"/>

it('Drugi Test', function (){
 cy.visit('https://www.wp.pl')
 cy.url().should('contain', 'wp');
})

it('Trzeci Test', function(){
 cy.visit('https://cypres.io/');
 cy.url().should('contain','cypress');
 cy.url().should('equal', 'cypress')
})