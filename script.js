// Your code here.
it('should simulate click and drag to scroll', () => {
  cy.get('.items').should('be.visible').then($items => {
    const startPosX = 493;
    const endPosX = 271;

    cy.wrap($items)
      .trigger('mousedown', { which: 1, pageX: startPosX, pageY: 391 })
      .trigger('mousemove', { which: 1, pageX: endPosX, pageY: 391 })
      .trigger('mouseup');

    cy.wait(1000); // Adjust this delay as needed

    cy.wrap($items).should($items => {
      expect($items[0].scrollLeft).to.greaterThan(0);
    });
  });
});