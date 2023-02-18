class categoryPage {
    openCategoryPage(locator){
        cy.xpath(locator).click();
    }

    createNewCategoryPositive(catName,catDesc){
        cy.xpath('//div/*[text()="kategori"]').click(); // open category page
        cy.xpath('//div/*[text()="tambah"]').click(); //click tambah button
        cy.get('[id="nama"]').type(catName);
        cy.get('[id="deskripsi"]').type(catDesc);
        cy.xpath('//button[text()="simpan"]').click();
    }

    createNewCategoryNegative(catDesc){
        cy.xpath('//div/*[text()="kategori"]').click(); // open category page
        cy.xpath('//div/*[text()="tambah"]').click(); //click tambah button
        cy.get('[id="deskripsi"]').type(catDesc);
        cy.xpath('//button[text()="simpan"]').click();
    }
}

export default categoryPage;