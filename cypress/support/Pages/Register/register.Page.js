class registerPage {

    element = {
        login:            () =>              cy.get('div.mode-toggle-option').eq(0),
        singUp:           () =>              cy.get('div.mode-toggle-option').eq(1),
        organizations:    () =>              cy.get('div.mode-toggle-option').eq(2),

    }


    get = {
        username:        () =>              cy.get('input.login-field-input').eq(0),
        email:           () =>              cy.get('input.login-field-input').eq(1),
        password:        () =>              cy.get('.password-field > .login-field-content'),
        confirmButton:   () =>              cy.get('button.btn.btn-gradient'),

    }

    enterUsername(username){
        this.get.username().type(username)
    }

    enterEmail(email){
        this.get.email().type(email)
    }

    enterPassword(password){
        this.get.password().type(password)
    }


}

module.exports = new registerPage()