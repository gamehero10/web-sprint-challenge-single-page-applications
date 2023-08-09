// Write tests here

describe("Pizza App", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  })

  it("sanity check to make sure tests work", () => {
    // "it" is a test
    // "expect" is an assertion
    // There can be multiple assertions per test, bu they all need to relate to the "one thing" that we're testing

    expect(1+2).to.equal(3);
    expect(2+2).not.equal(5); // ALWAYS USE TRIPLE EQUALS WHEN COMPARING NUMBERS
    expect({}).not.to.equal({}); // OBJECTS ARE NOT EQUAL SINCE THEY POINT TO DIFFERENT PLACES IN MEMORY
    expect({}).to.eql({}); 
})



   // HELPERS AKA GETTERS
   const toppings = () => cy.get('[type = "checkbox"]');
   const sauce = () => cy.get('[type = "radio"]');
   const submitBtn = () => cy.get(`button[id="order-button"]`);
   it("making sure I can add text to the box", () => {
   cy.get('#name-input').type('Rafael Deluna');
   cy.get('#special-text').type('Get the job done!!!!!');
   cy.get('select[id="size-dropdown"]').select('Small').should('have.value', 'small');
   cy.get('.pizza').submit();
   
   })

   it("the proper elements are showing", () => {
    toppings().should("exist");
    sauce().should("exist");
    submitBtn().should("exist");
    
   
  
  })


   describe("filling out the inputs and cancelling", () => {
  
    it("can check a checkbox", () => {
      toppings().check();
    })

    it("can fill in a radio button", () => {
      sauce().check();
    })

  
  

 
})
})