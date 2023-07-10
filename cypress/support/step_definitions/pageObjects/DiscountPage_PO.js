class DiscountPage_PO {
    DiscountSelection(){
        cy.get(':nth-child(6) > .css-1bjbd9w > .css-1hqpohq > [data-testid="offer-tile-image-title-container"]').click({force:true})

    }

    Discountmessage(){
        cy.get('.css-1pxu650').should("have.text", "Sports Direct Student Discounts")

    }
    
   




}

export default DiscountPage_PO