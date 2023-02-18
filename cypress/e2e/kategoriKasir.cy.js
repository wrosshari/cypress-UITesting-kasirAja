require('cypress-xpath');
import loginPage from '../support/pageObjects/loginPage';
import categoryPage from '../support/pageObjects/categoryPage';

describe('Kategori test suite', () => {
    const login = new loginPage();
    const category = new categoryPage();

    const catName = 'snack';
    const catDesc = 'kemasan plastik';
    
    beforeEach(() => {
        login.loginKasir('samplexx@ex.com','123adsfadf@');       
    });

    it('Open category page, positive case', () => {
        category.openCategoryPage('//div/*[text()="kategori"]');
        //cy.xpath('//div/*[text()="kategori"]').click();// open category page
        
        //assert text on category page
        cy.get('.css-tyo1sz > .chakra-heading').contains('dashboard');
        cy.get('.css-tyo1sz > .chakra-heading').contains('kategori');
    })

    it('Add new category with valid data, positive case', () => {
        category.createNewCategoryPositive(catName,catDesc);

        //assert success toast message
        cy.xpath('//div[@role="alert"]/div/div[2]', {timeout: 10000}).should('have.text','item ditambahkan')
        //assert text dasboard/kategori after create new category
        cy.xpath('//tbody/tr[1]/td[1]').should('contain', catName);
        cy.xpath('//tbody/tr[1]/td[2]').should('contain', catDesc);
    })

    it('Add new category with empty name, negative case', () => {
        category.createNewCategoryNegative(catDesc);

        //asert warning message
        cy.get('[role="alert"]').should('contain','"name" is not allowed to be empty');
    })
  
  })