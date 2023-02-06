const footerPage = require("../../../support/Pages/Footer/footer.Page")
const homePagePage = require("../../../support/Pages/HomePage/homePage.Page")


describe("CoderByte | HomePage", () => {

    beforeEach(" Precondition: go to TDQ page ", () => {
        cy.visit(("https://coderbyte.com/"))
        cy.clearCookies()
        cy.clearLocalStorage()
    })

    it('TC1 : Assert successfully logout', () => {
        homePagePage.dashboard.organizations().trigger('mouseover')
        //footerPage.socialMedia.facebook().click({force: true})
        footerPage.assertFacebook()
        
    })

})
