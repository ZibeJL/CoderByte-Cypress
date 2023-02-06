class footerPage {

    socialMedia = {
        facebook:      () =>              cy.get('a[href="https://www.facebook.com/coderbyte"]'),
        twitter:       () =>              cy.get('a[href="https://twitter.com/coderbyte"]'),
        linkIn:        () =>              cy.get('a[href="https://www.linkedin.com/company/coderbyte/"]'),

    }

    assertFacebook(){
        this.socialMedia.facebook()

    }



}

module.exports = new footerPage()