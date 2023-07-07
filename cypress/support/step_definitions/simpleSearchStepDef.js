import Homepage_PO from "./pageObjects/Homepage_PO";
import Searchpage_PO from "./pageObjects/Searchpage_PO";
const homepage_PO = new Homepage_PO();
const search_PO = new Searchpage_PO();

Given("I am on the studentbeans homepage", () => {
    homepage_PO.visitHomepage();
})

And("I open the search bar", () => {
    homepage_PO.clickOn_search();

})

When("I enter Samsung", () => {
    search_PO.searchTab();

})

 Then("I should select the 4th Samsung search listing", () => {
     search_PO.ProductSelected();
 })


