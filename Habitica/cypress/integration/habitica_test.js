context('Login', () => {

  it('Makes a wrong login attemp', () => {
      cy.visit('https://habitica.com/static/home')
      cy.screenshot()
      cy.get('.login-button').click();
      cy.wait(3000)

      cy.get('#usernameInput').type('Takezo316');
      cy.get('#passwordInput').type('Badpassword');
      cy.screenshot()

      cy.get('.btn-info[type="submit"]').click()
      cy.screenshot()

    })
});