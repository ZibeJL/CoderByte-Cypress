const homePagePage = require("../../../support/Pages/HomePage/homePage.Page")
const registerPage = require("../../../support/Pages/Register/register.Page")

describe("CoderByte | Register user", () => {

    beforeEach(" Precondition: go to TDQ page ", () => {
        cy.visit("https://coderbyte.com/sl")
        cy.clearCookies()
        cy.clearLocalStorage()
    })

    it('TC1 : Assert successfully logout', () => {
        registerPage.enterUsername("ZibeQA")
        registerPage.enterEmail("zibeQA@gmail.com")
        registerPage.enterPassword("zibe1233")
        registerPage.get.confirmButton().click()
    })

})