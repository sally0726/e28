describe('Posts List Page', () => {
    
    it('show all the posts', () => {
        cy.visit('/');
        // have posts listed
        cy.get('[data-test="post-title"]').its('length').should('be.gte', '1');
    })
})