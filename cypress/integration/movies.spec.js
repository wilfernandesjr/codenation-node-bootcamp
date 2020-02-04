describe('Quando eu acesso a url http://localhost:8080/movies/1', () => {
  it('exibir conteúdo sobre o filme', () => {
    cy.visit('http://localhost:8080/movies/1')

    cy.contains('Guardians of the asaalaxy')
  })
})
