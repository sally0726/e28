describe('Write Post Page', () => {
    
    let post = {
        title: 'test',
        content: 'asdfasdfasdfasdfasdfasdfasdfasdfasdf'
    }

    it('shows error if title or content missing', () => {
        cy.login();
        cy.visit('/post');

        cy.get('[id="title"]').clear().type(post.title);
        cy.contains("field is required");
    })

    it('shows error if title or content missing', () => {
        cy.login();
        cy.visit('/post');

        cy.get('[id="title"]').clear().type(post.title);
        cy.get('[id="content"]').clear().type(post.content);
        cy.get('[data-test="post-btn"]').should('exist');
    })
})