describe('Login Page', () => {

    let user = {
        username: "test12",
        password: "123123123"
    }
    
    it('Show errors when username or password is invalid', () => {
        cy.visit('/register');
        cy.get('[id="username"]').clear();
        cy.get('[id="password"]').clear().type(user.password);
        cy.contains("field is required");
    }
}