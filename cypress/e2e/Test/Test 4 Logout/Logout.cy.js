const loggedHomePage = require("../../../support/Pages/LoggedHomePage/loggedHome.Page")

describe("CoderByte | HomePage", () => {

    beforeEach(" Precondition: go to CoderByte page ", () => {
        cy.visit(("https://coderbyte.com/"))
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.successfullyLogin()
    })

    it.only('TC1 : Assert successfully logout', () => {
        loggedHomePage.dashboard.profile().trigger('mouseover')
        loggedHomePage.dashboard.logout().click({force: true})
    })

    it.only('TC2 : Assert successfully logout from profile', () => {
        loggedHomePage.dashboard.profile().click()
        loggedHomePage.dashboard.profile().trigger('mouseover')
        loggedHomePage.dashboard.logout().click({force: true})
    })
})