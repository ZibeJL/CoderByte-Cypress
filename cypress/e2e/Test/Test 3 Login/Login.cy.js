const homePagePage = require("../../../support/Pages/HomePage/homePage.Page")
const loginPage = require("../../../support/Pages/Login/login.Page")
const registerPage = require("../../../support/Pages/Register/register.Page")

describe("CoderByte | HomePage", () => {

    beforeEach(" Precondition: go to CoderByte page ", () => {
        cy.visit(("https://coderbyte.com/"))
        cy.clearCookies()
        cy.clearLocalStorage()
    })

    it('TC1 : Assert successfully login', () => {
        homePagePage.dashboard.login().click()
        registerPage.element.login().click()
        loginPage.enterUsername("ZibeQA")
        loginPage.enterPassword("zibe1233")
        loginPage.get.confirmButton().click()
    })

    it('TC2 : Assert empty input login', () => {
        homePagePage.dashboard.login().click()
        registerPage.element.login().click()
        loginPage.get.confirmButton().click()
        loginPage.assert.errorLogin()
    })

    it('TC3 : Assert empty username input login', () => {
        homePagePage.dashboard.login().click()
        registerPage.element.login().click()
        loginPage.enterPassword("zibe1233")
        loginPage.get.confirmButton().click()
        loginPage.assert.errorLogin()
    })

    it('TC4 : Assert empty password input login', () => {
        homePagePage.dashboard.login().click()
        registerPage.element.login().click()
        loginPage.enterUsername("ZibeQA")
        loginPage.get.confirmButton().click()
        loginPage.assert.errorLogin()
    })

    it('TC5 : Assert incorrect inputs login', () => {
        homePagePage.dashboard.login().click()
        registerPage.element.login().click()
        loginPage.enterUsername("asDAas")
        loginPage.enterPassword("asd123123312")
        loginPage.get.confirmButton().click()
        loginPage.assert.errorLogin()
    })

    it.only('TC6 : Assert successfully login', () => {
        homePagePage.dashboard.login().click()
        registerPage.element.login().click()
        loginPage.testCaseRandomInput()
        loginPage.get.confirmButton().click()
    })

})