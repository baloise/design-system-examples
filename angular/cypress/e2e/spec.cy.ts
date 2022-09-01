describe('empty spec', () => {
  it('first test', () => {
    cy.visit('http://localhost:4200')
    cy.get('[formcontrolname="name"]').type('some.one@example.com');
  //  cy.get('#bal-input-1').focus();
  //  cy.get('#bal-input-2').type('some.one@example.com');

    cy.get('[formcontrolname="name"]').focus();
    cy.wait(1000)
   cy.get('[formcontrolname="name"]').blur();
    //cy.get('#bal-input-1').clear();
    cy.wait(330000)
  })
})
