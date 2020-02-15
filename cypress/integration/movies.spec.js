describe('Quando eu acesso a url http://localhost:8080/movies/1', () => {
  it('exibir conteúdo sobre o filme', () => {
    cy.visit('http://localhost:8080/movies/1')

    cy.get('h1').contains('Guardians of the Galaxy')

    cy.get('[data-cy="posterior"]')
      .should('have.attr', 'href', '/movies/2')
  })
})
