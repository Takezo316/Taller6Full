context('Crear Habito', () => {

    it('Creates a new habit', () => {
        cy.visit('https://habitica.com/static/home')
        cy.get('.login-button').click();
        cy.wait(3000)

        cy.get('#usernameInput').type('Takezo316');
        cy.get('#passwordInput').type('TK316Habitica');
  
        cy.get('.btn-info[type="submit"]').click();
        cy.screenshot()
        cy.wait(3000)
        
        //Crear un Nuevo Hábito
        cy.get('.quick-add').first().type('My screenshot Habit').type('{enter}');
        cy.screenshot()
  
      })
  });