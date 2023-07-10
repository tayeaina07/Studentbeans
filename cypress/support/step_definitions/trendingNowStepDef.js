import Homepage_PO from "./pageObjects/Homepage_PO";
import DiscountPage_PO from "./pageObjects/DiscountPage_PO";


const homepage_PO = new Homepage_PO();
const discount_PO = new DiscountPage_PO();


Given("I am on the studentbeans homepage", () => {
    homepage_PO.visitHomepage();
})

And("I click on trending now", () => {
    homepage_PO.clickOn_trending();

})

When("I select the desired discount on the list", () => {
    discount_PO.DiscountSelection()
})

Then("I should this discount name Sports Direct Student Discounts", () => {
    discount_PO.Discountmessage();

})