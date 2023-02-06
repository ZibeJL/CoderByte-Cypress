class loggedHomePage {

    dashboard = {
        profile:         () =>              cy.get('a.manage-link'),
        setting:         () =>              cy.get('a[href="/settings"]'),
        logout:          () =>              cy.get('a[href="/logout"]'),

        interviews:      () =>              cy.get('a[href="/organizations#interviewsSection"]'),
        pricing:         () =>              cy.get('a[href="/organizations#pricing"]'),

        developers:      () =>              cy.get(':nth-child(3) > [href="/developers?utm_campaign=NewHomepage"]'),
        starCourses:     () =>              cy.get('a[href="/developers?utm_campaign=NewHomepage#courses"]'),
        challenges:      () =>              cy.get('a[href="/challenges?utm_campaign=NewHomepage"]'),
        interviewKit:    () =>              cy.get('a[href="/developers?utm_campaign=NewHomepage#interviewKits"]'),
        membership:      () =>              cy.get('a[href="/member?utm_campaign=NewHomepage"]'),

    }


}

module.exports = new loggedHomePage()