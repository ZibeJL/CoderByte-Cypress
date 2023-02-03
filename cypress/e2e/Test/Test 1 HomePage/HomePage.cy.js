const homePagePage = require("../../../support/Pages/HomePage/homePage.Page")
const registerPage = require("../../../support/Register/register.Page")

describe("CoderByte | HomePage", () => {

    beforeEach(" Precondition: go to TDQ page ", () => {
        cy.visit(("https://coderbyte.com/"))
        cy.clearCookies()
        cy.clearLocalStorage()
    })

    it('TC1 : Assert successfully logout', () => {
        homePagePage.dashboard.login().click()
        registerPage.dashboard.username().type("hello")
        //homePagePage.dashboard.organizations().trigger('mouseover')
    })

})