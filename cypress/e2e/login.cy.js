describe('Login en SauceDemo', () => {
    const baseUrl = 'https://www.saucedemo.com/v1/';
  
    beforeEach(() => {
      cy.visit(baseUrl);
    });
  
    it('debería iniciar sesión exitosamente con credenciales válidas', () => {
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
  
      // Verificamos que redirige a la página de inventario
      cy.url().should('include', '/inventory.html');
    });
  
    it('debería mostrar un error con credenciales inválidas', () => {
      cy.get('#user-name').type('usuario_invalido');
      cy.get('#password').type('contrasena_mala');
      cy.get('#login-button').click();
  
      cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'Username and password do not match');
    });
  });