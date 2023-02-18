require('cypress-xpath');
import loginPage from '../support/pageObjects/loginPage.js';
import penjualanPage from '../support/pageObjects/penjualanPage.js';

describe ('Penjualan test suite', () => {
    const login = new loginPage();
    const penjualan = new penjualanPage();

    const productName = 'taro';
    const custMoney = 50000;

    //selalu login setiap menjalankan test suit penjualan
    beforeEach(() => {
        login.loginKasir('samplexx@ex.com', '123adsfadf@');
    })

    it('Open penjualan page, positive case', () => {
        penjualan.openPenjualanPage('[href="/sales"]')

        cy.get('.css-tyo1sz > .chakra-heading').contains('dashboard');
        cy.get('.css-tyo1sz > .chakra-heading').contains('penjualan');
    })

    it('Admin create penjualan transaction, positive case', () => {        
        penjualan.openPenjualanPage('[href="/sales"]');
        penjualan.createPenjualanPositive(productName,custMoney);
        
        //assertion for kembalian
        penjualan.checkKembalian(custMoney);
    })

    it('Admin create penjualan transaction without product, negative case', () => {        
        penjualan.openPenjualanPage('[href="/sales"]');
        penjualan.createPenjualanNegative();
        
        //assertion for error toast message
        cy.xpath('//*[@role="alert"]/div/div[2]').should('have.text', 'item produk kosong');
    })
})

