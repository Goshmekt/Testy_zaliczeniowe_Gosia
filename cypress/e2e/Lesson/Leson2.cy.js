//test 1
describe.only('Tests of search on google', ()=>{ //tylko blok describe z oznaczeniem .only zostanie uruchomiony, a wszystkie inne bloki describe i it w pliku zostaną pominięte.
    it.skip('Search Wikipedia with {enter}', ()=>{ //skip oznacza, że dany test będzie pomijany podczas uruchamiania testów. Aby aktywować pominięty test, wystarczy usunąć .skip z kodu testu.
        cy.get('#L2AGLb > .QS5gu').click().should('not.be.visible');
        cy.get('#APjFqb').clear().type('Wikipedia').type('{enter}');
        cy.url().should('contain','?q=Wikipedia');
    })
//test 2
    it.skip('Search Wikipedia with click on icon', () => {
        cy.get('#L2AGLb > .QS5gu').click().should('not.be.visible');
        cy.get('#APjFqb').clear().type('Wikipedia');
        cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click();
        cy.url().should('contain','?q=Wikipedia');
    })
//test 3
    it.skip('Search Wikipedia with list', () => {
        cy.get('#L2AGLb > .QS5gu').click().should('not.be.visible');
        cy.get('#APjFqb').clear().type('Wikipedia');
        cy.get('#ERWdKc > .wM6W7d > span').click();
        cy.url().should('contain','?q=wikipedia'); //tutaj wikipedia piszemy małą literą ponieważ w rozwijanej liście wyszukiwane hasła w wikipedii są małą literą. W przeciwnym razie test nie przechodzi
    })
//test 4 // Jeżeli jest it.only to będzie  tylko wyświetlał  testy z only, dlatego nie wykonuje testów 1-3
    it.only('Search Wikipedia with click on element from list functions', () => {
        cy.get('#L2AGLb > .QS5gu').click().should('not.be.visible');
        cy.get('#APjFqb').clear().type('Wikipedia').wait(1000);
        //cy.get('.wM6W7d').first();
        //cy.get('.wM6W7d').eq(-3);
        //cy.get('.G43f7e').children();
        cy.get('.erkvQe').children().children().children().eq(0).click();
        cy.url().should('contain','?q=wikipedia');
    })
//test 5
    it.only ('Go to site Wikipedia', () => {
        cy.get('#L2AGLb > .QS5gu').click().should('not.be.visible');
        cy.get('#APjFqb').clear().type('Wikipedia');
        cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click();
        cy.url().should('contain','?q=Wikipedia');
        cy.get('[href="https://www.wikipedia.org/"] > .LC20lb').click().wait(1000);
        cy.origin('https://www.wikipedia.org',() => {
            cy.url().should('contain','wikipedia'); //nie ma ?q ponieważ jest to inna strona wikipedii
    })
})
})