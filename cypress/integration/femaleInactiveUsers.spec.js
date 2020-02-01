describe('/female-inactive should', () => {
  it('load cards with all female inactive users', () => {
    cy.visit('http://localhost:3000/female-inactive')

    cy.get('main').should('have.length', 5)
  })
})
