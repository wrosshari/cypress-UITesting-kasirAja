describe('Login test suite', () => {
  
  const email = 'samplexx@ex.com';
  const password = '123adsfadf@';

  it('Login with valid data', () => {
    cy.visit('/');
    cy.get('[id = "email"]').type(email);
    cy.get('[id = "password"]').type(password);
    cy.get('[type = "submit"]').click();
    
    cy.url().should('contain','/dashboard');
    cy.contains("kasirAja");
  })
  
  it('Login with invalid email', () => {
    cy.visit('/');
    cy.get('[id = "email"]').type("samplexx@ex.xx");
    cy.get('[id = "password"]').type(password);
    cy.get('[type = "submit"]').click();
    
    cy.get('[role = "alert"]').should('contain','"email" must be a valid email');
  })

  it('Login with invalid password', () => {
    cy.visit('/');
    cy.get('[id = "email"]').type(email);
    cy.get('[id = "password"]').type("123adsfa111");
    cy.get('[type = "submit"]').click();
    
    cy.get('[role = "alert"]').should('contain','Kredensial yang Anda berikan salah');
  })

})