describe('empty spec', () => {
  it('first test', () => {
    cy.visit('http://localhost:4200')
    cy.get('#bal-input-1').type('some.one@example.com');
  //  cy.get('#bal-input-1').focus();
  //  cy.get('#bal-input-2').type('some.one@example.com');

    cy.get('#bal-input-1').focus();
    cy.get('#bal-input-1').blur();
    //cy.get('#bal-input-1').clear();
    cy.wait(330000)
  })
})
