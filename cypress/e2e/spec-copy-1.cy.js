describe('Form', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')

    cy.get('.input-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')


    cy.get('#subscribe-btn').type('submit').click()

    cy.getCookies()
  })
})


describe('tesori spec', () => {
  it('passes', () => {
    cy.visit('https://www.tesori.no/')

    cy.getCookies()
  })
})