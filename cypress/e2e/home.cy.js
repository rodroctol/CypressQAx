describe('home', () => {
  it('web app deve estar aberta', () => {
    cy.visit('/');
    cy.title().should('eq', 'Gerencie suas tarefas com Mark L');
    
  })
})