class loginPage {

    get = {
        username:        () =>              cy.get('input.login-field-input').eq(0),
        password:        () =>              cy.get('input.login-field-input').eq(1),
        confirmButton:   () =>              cy.get('button.btn.btn-gradient'),

    }

    assert = {
        errorLogin:      () =>              cy.get('div.login-error').should("have.text", "The username or password were incorrect."),
    }

    enterUsername(username){
        this.get.username().type(username)
    }

    enterPassword(password){
        this.get.password().type(password)
    }

    testCaseRandomInput(){
        this.get.username().type(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
        this.get.password().type(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));

    }


}

module.exports = new loginPage()