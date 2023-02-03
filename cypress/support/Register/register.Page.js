class registerPage {

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