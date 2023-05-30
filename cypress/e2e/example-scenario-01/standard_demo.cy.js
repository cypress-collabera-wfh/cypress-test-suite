describe('demo test suite',()=>{

    // Remove if not needed
    before('do this first', ()=>{})

    // Remove if not needed
    beforeEach('do this before each test', ()=>{})
    
    // Remove if not needed
    after('do this last', ()=>{})

    // Remove if not needed
    afterEach('do this after each test', ()=>{})

    it('first test',()=>{
        // Call custom commands here
        // All logic (including fixtures) should be moved to custom commands or POM
        cy.ExampleCustomCommand()
    })
})