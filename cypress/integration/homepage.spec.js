/// <reference types="cypress" />

context('Home', () => {
    before(() => {
        cy.visit('/home')
    })

    describe('Test page loads correctly', () => {

        it('the page title is set', () => {
            cy.get('head').find('title')
                .should('have.text', "Home - Global Centre of Possibility")
        })

        it('the menu loads', () => {
            cy.get('[data-testid=menu-md]').should(($menu) => {
                expect($menu).length(5)
            })
        })

        it('the Hero loads', () => {
            // check Hero
            cy.get('[data-testid=hero]').as('hero')
            cy.get('@hero').find('[data-testid=title]').should(($title) => {
                expect($title, 'text content').to.have.text("Global Centre of Possibility")
            })
            cy.get('@hero').find('[data-testid=headline]')
                .should('have.text', "Pioneering Possibility leadership, design and innovation for Aotearoa and the world.")
        })

        it('the footer loads', () => {
            cy.get('footer').as('footer')
            cy.get('@footer').find('a[href="/"]')
                .should('have.text', "Global Centre of Possibility")
            
            cy.get('@footer').find('.MuiGrid-item').should(($cols) => {
                expect($cols.first(), 'text content').to.have.text("Global Centre of Possibility")
                expect($cols.eq(1).find('h5'), 'text content').to.have.text("Resources")
                expect($cols.eq(2).find('h5'), 'text content').to.have.text("Work with us")
                expect($cols.eq(3).find('h5'), 'text content').to.have.text("Contact")
            })
        })
        
    })
})