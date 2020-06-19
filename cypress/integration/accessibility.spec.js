const A11yOptions = {
    runOnly: {
        type: 'tag',
        //Define accessibility rules. NZ Gov web accessibility standard is based on WCAG 2.1
        values: ['wcag21aa']
    }
};

context('A11Y', () => {
    it('Home page passes A11Y test', () => {
        cy.visit('/home');
        cy.injectAxe();
        cy.checkA11y('', A11yOptions);
    });

    it('About page passes A11Y test', () => {
        cy.visit('/about');
        cy.injectAxe();
        cy.checkA11y('', A11yOptions);
    });
});