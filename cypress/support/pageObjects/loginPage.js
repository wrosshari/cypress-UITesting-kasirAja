class loginPage {
    loginKasir(email, password) {        
     cy.visit('/');
     cy.get('[id = "email"]').type(email); //input email
     cy.get('[id = "password"]').type(password); //input password
     cy.get('[type = "submit"]').click(); //click button submit
    
     cy.url().should('contain','/dashboard');  
    }
}

export default loginPage;