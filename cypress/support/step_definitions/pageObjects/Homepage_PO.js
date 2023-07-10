class Homepage_PO {
    visitHomepage(){
        cy.visit("https://www.studentbeans.com/uk");
        cy.get('#onetrust-accept-btn-handler').click({force:true})
    }

    clickOn_search(){
        cy.get('[data-testid="home-search-bar"]').click({force:true})
    }

    clickOn_trending(){
        cy.get('[data-testid="nav-category-trending-now"]').click({force:true})

    }




}

export default Homepage_PO