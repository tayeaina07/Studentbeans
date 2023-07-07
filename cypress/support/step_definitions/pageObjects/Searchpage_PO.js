class Searchpage_PO {
    searchTab(){
        cy.get('[data-testid="search-input"]').type("Samsung")
    }

    ProductSelected(){
        cy.get(':nth-child(4) > [data-testid="search-result-offer"]').click({force:true});

    }
   




}

export default Searchpage_PO