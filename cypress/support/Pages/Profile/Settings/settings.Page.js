class settingsPage {

    socialMedia = {
        name:                () =>              cy.get('#new_name'),
        email:               () =>              cy.get('#new_email'),
        password:            () =>              cy.get('#new_pass_FAKE]'),
        country:             () =>              cy.get('#country_field'),
        twitter:             () =>              cy.get('#twitHandle'),
        linkedIn:            () =>              cy.get('#linkedInName'),
        github:              () =>              cy.get('#githubHandle'),
        picture:             () =>              cy.get('#new_picture'),
        radioButton1:        () =>              cy.get('a[name="mailing_option"]').eq(0),
        radioButton2:        () =>              cy.get('a[name="mailing_option"]').eq(1),
        saveChangeButton:    () =>              cy.get('#new_submit'),


    }

    assert(){

    }



}

module.exports = new settingsPage()