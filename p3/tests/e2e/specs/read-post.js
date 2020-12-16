describe('Post Detail Page', () => {
    
    it('Shows post details', () => {
        cy.login();
        cy.visit('/read/0')
        cy.get('[data-test="post-title"]').should('exist');
        cy.get('[data-test="post-content"]').should('exist');
        cy.get('[data-test="post-date"]').should('exist');
    })
}