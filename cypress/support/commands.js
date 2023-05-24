// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import ExamplePOM from "../pom/ExamplePOM"

Cypress.Commands.add('ExampleCustomCommand', (params = null)=>{
        const examplePom = new ExamplePOM()

        examplePom.getSomething()
        examplePom.setSomething()

        /*
        If you want to chain your methods like examplePom.setSomething().getSomething,
        each method in ExamplePOM should return 'this':

        getSomething(){
            // your logic here...

            // then 
            return this
        }

        examplePom.getSomething()
                  .setSomething()
        */


})