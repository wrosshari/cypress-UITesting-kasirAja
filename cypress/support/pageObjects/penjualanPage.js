class penjualanPage {
    openPenjualanPage(locator){
        cy.get(locator).click();
    }

    createPenjualanPositive(productName,custMoney){
        cy.xpath('//*[text()="tambah"]').click();
        cy.xpath('//button[text()="produk"]').click();
        cy.get('[placeholder="cari"]').type(productName);
        cy.get('tbody.css-0 > :nth-child(1) > :nth-child(6)').click();
        //cy.xpath('//input[@type="number"]').clear().type(qty);
        cy.xpath('//input[@placeholder="...jumlah bayar"]').type(custMoney);
        cy.xpath('//button[text()="Bayar"]').click();
    }

    createPenjualanNegative(){
        cy.xpath('//*[text()="tambah"]').click();
        cy.xpath('//button[text()="Bayar"]').click();
    }

    checkKembalian(custMoney){
        cy.get('#chakra-modal--body-22 > :nth-child(2)').then(($totalPenjualan) =>{ //"3.500"
            var total = parseFloat($totalPenjualan.text()); // "3.500" => 3.5
            var finalTotal = Math.round(total * 1000);// 3.5 => 3500
            var kembalian1 = custMoney - finalTotal;

            cy.get('#chakra-modal--body-22 > :nth-child(6)').then(($actualKembalian) => {
                var kembalian2 = parseFloat($actualKembalian.text());
                var finalKembalian = Math.round(kembalian2 * 1000);

                //compare kembalian
                expect(finalKembalian).to.eql(kembalian1);
            })
        })
    }
}

export default penjualanPage;