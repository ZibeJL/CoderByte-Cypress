class homePage {

    dashboard = {
        login:           () =>              cy.get('.menu-item > a'),
        organizations:   () =>              cy.get('.employers > [href="/organizations?utm_campaign=NewHomepage"]'),
        developers:      () =>              cy.get(':nth-child(3) > [href="/developers?utm_campaign=NewHomepage"]'),

    }


}

module.exports = new homePage()