# Best Practices

### 1. Hooks
- Setup test hooks: before(), beforeEach(), after(), afterEach()

### 2. Data-driven testing
- Testing with fixtures (csv, json, txt)
- Use fixtures for storing selectors, strings, test data

### 3. Custom commands
- Make your code more reusable. 
- Using child commands is recommended.
#### Caveats
- Don't make everything a custom command. Try to make it as an independent function, instead of a global custom command.
- Don't do too much in a single command. Try to avoid wrapping everything under a single custom command and keep them simple.
- Skip UI actions in Custom commands. If we will have multiple UI actions inside the custom commands, then invoking the custom commands will make the overall test execution very slow. So, try to avoid UI actions as much as feasible in the custom commands.

### 4. Parameterized Tests
- Dynamic data sets, randomly generated
- [cypress-example-recipes/examples/fundamentals__dynamic-tests at master · cypress-io/cypress-example-recipes · GitHub](https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/fundamentals__dynamic-tests)

### 5. Test Data Management
- Use of libraries    
- Maintenance (checking if test data are still valid)
- Versioning (assigning versions to test data for easy tracking during development and debugging/troubleshooting)

### 6. POM (Page Object Model) Design Pattern
- Use POM design pattern for code reusability and maintainability.

### 7. Configuration
- Explore different settings
- Use env variables for values in various environments

### 8. Screenshots and Video
- Visual reporting of results

### 9. Dashboard Features
- Cypress Cloud
- Sorry-Cypress (open source alternative) [sorry-cypress/sorry-cypress: Open-source, free, self-hosted alternative to Cypress Dashboard (github.com)](https://github.com/sorry-cypress/sorry-cypress)

### 10. Environment Variable
- Use env variables for centralized test settings (timeouts, delays, system-related values)

### 11. Generate HTML Reports
- Use mochawesome plugin for generating test execution results

### 12. Plugins
- Use of plugins are recommended for increased productivity
	- cypress-iframe
	- cypress-xpath
	- cypress-file-upload
	- cypress-mochawesome-reporter
- Other official plugins https://docs.cypress.io/plugins/

### 13. Use XPath (cypress-xpath)
- Xpath is flexible in locating elements instead of CSS.
- [Xpath cheatsheet (devhints.io)](https://devhints.io/xpath)

### 14. Integrate with Git
- Github, Gitlab, Bitbucket
- Assigning versions to test data for easy tracking during development and debugging/troubleshooting

### 15. Integrate with CI/CD Tools
- Jenkins

### 16. Documentation
- Proper and standard Documentation across projects
	- Standard test case format
	- Proper test case writing to avoid redundancy
	- Standard bug ticket description
	- Consistent branch naming
	
## Reference
- [Best Practices | Cypress Documentation](https://docs.cypress.io/guides/references/best-practices)
- [Guidelines for Structuring Automated Tests | Thoughtworks](https://www.thoughtworks.com/insights/blog/guidelines-structuring-automated-tests)