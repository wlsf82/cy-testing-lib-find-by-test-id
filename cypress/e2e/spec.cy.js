describe('@testing-library/cypress', () => {
  it('cy.findByTestId()', () => {
    // Arrange
    cy.visit('src/index.html')
    // Act
    cy.findByTestId('username-login-field').type(Cypress.env('USERNAME'))
    cy.findByTestId('password-login-field').type(Cypress.env('PASSWORD'), { log: false })
    cy.findByTestId('login-button').click()
    // Assert
    cy.contains('p', "You're logged in").should('be.visible')
  })
})
