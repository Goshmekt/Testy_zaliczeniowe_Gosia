/// <reference types="cypress"/>

beforeEach('setup', () => {
   cy.viewport(1440, 1080);
   cy.visit('https://www.onet.pl');
   cy.url().should('contain', 'onet');
})

//Test 1
it('Przejdź do serwisu', () => {
   cy.get('.cmp-intro_acceptAll > span').should('be.visible'); // sprawdzamy czy jest widoczny przycisk
   cy.get('.cmp-intro_acceptAll > span').click(); // pobranie selektora
   cy.get('.cmp-intro_acceptAll > span').should('not.be.visible');
})
//Test 2
it('Ustawienia zaawansowane', () => {
   cy.get('.cmp-intro_rejectAll > span').should('be.visible');
   cy.get('.cmp-intro_rejectAll > span').click();
})

//Test 3

it('Włącz wszystko i przejdź do serwisu', () => {
   cy.get('.cmp-intro_rejectAll > span').should('be.visible');
   cy.get('.cmp-intro_rejectAll > span').click();
   cy.get('.cmp-details_acceptAll').should('be.visible');
   cy.get('.cmp-details_acceptAll').click();
})

//Test 4
it('Nie wyrażam zgody', () => {
   cy.get('.cmp-intro_rejectAll > span').should('be.visible');
   cy.get('.cmp-intro_rejectAll > span').click();
   cy.get('.cmp-intro_rejectAll > span').should('be.visible');
   cy.get('.cmp-intro_rejectAll > span').click();
   cy.get('.cmp-intro_rejectAll > span').should('not.be.visible');
})

//Test 5
it('Sprawdzenie zakładki wiadomości', () => {
   cy.get('.cmp-intro_acceptAll > span').click();
   cy.get(':nth-child(1) > .Menu_navMenuLink__Qde0X').should('be.visible');
   cy.get(':nth-child(1) > .Menu_navMenuLink__Qde0X').click();
   cy.url().should('contain', 'wiadomosci');
})

//Test 6
it('Przekierowanie na stronę Jak dojadę po kliknięciu w zakładkę', () => {
   cy.visit('https://www.onet.pl');
   cy.get('.Shortcuts_shortcutsJakDojade__xXI8e').contains('Jak dojadę').click();
   cy.url().should('include', 'jakdojade');
})


//Test 7

it('Przekierowanie na stronę ze sportem po kliknięciu na zakładkę "Sport"', () => {
   cy.visit('https://www.onet.pl');
   cy.get(':nth-child(2) > .Menu_navMenuLink__Qde0X').click();
   cy.url().should('include', 'sport');
})


//Test 8
it('Wyszukiwanie pogody z listy', () => {
   cy.get('.cmp-intro_acceptAll > span').click();
   cy.get(':nth-child(6) > .Menu_navMenuLink__Qde0X').click();
   cy.get('#locationSearch').clear().type('Warszawa');
   cy.get('#autocomplete-suggestions > [tabindex="0"]').click();
   cy.url().should('contain', 'warszawa');
})

describe('Onet.pl Email', () => {
   beforeEach(() => {
      cy.visit('https://www.onet.pl');
      cy.get('.MenuIcon_highlighted__X7zNd > .MenuIcon_labelText__0n1xb').click();
   })

   //Test 9
   it('Czy strona logowania do poczty wyświetla się prawidłowo', () => {
      cy.url().should('include', 'poczta.onet.pl');
      cy.get('#email').should('be.visible');
      cy.get('#password').should('be.visible');
   })

   //Test 10
   it('Czy użytkownik może się zalogować', () => {
      cy.get('#email').type('testerpolitechniki@op.pl');
      cy.get('#password').type('Password1!');
      cy.get('.sc-a7eb406c-10 > .sc-ca90c2ac-0').click();
      cy.url().should('include', 'poczta.onet.pl');
      //cy.contains('Wyloguj').should('be.visible');
   })
})
