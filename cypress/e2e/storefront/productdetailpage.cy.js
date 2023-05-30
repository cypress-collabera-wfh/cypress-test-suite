
describe('Product Detail Page', ()=> {

    beforeEach('Go to amazon homepage', ()=>{
        cy.viewport(1600, 900)
        cy.visit('https://vuestorefront-magento.demo.hatimeria.com/')
    })

    it.skip('Click on carousel product',() => {
        // Right slider
        cy.xpath('//section[1]/descendant::h2')
                .should('contain', 'New Products')
                .should('be.visible')
                .scrollIntoView({ force: true })
            
        cy.xpath('//section[1]/descendant::button[@data-testid="carousel-next-button"]')
                .should('exist')
                .click({ force: true })
                .click({ force: true })
                
        cy.xpath('//section[1]/descendant::li[13]/descendant::a[1]').should('be.visible')
                .click({ force: true })
                .then((response) => {
                    cy.contains('Set of Sprite Yoga Straps')

                    cy.contains('Read all reviews')
                    cy.contains('Add a review')
                    cy.contains('Size guide')

                    cy.contains('Description')
                    cy.contains('Read reviews')
                    cy.contains('Additional Information')

                    cy.xpath('//button[@class="color-primary sf-button grouped_items--add-to-cart sf-button"]')
                        .should('be.visible')
                        .should('contain', 'Add to Cart')

                    cy.xpath('//div[@class="sf-rating"]')
                        .should('be.visible')

                    cy.xpath('//div[@class="sf-rating"]/span')
                        .should('have.length', 5)
                })
    })

    it('add to cart and confirm contents', () => {
        cy.xpath('//section[1]/descendant::h2')
                .should('contain', 'New Products')
                .should('be.visible')
                .scrollIntoView({ force: true })
            
        cy.xpath('//section[1]/descendant::button[@data-testid="carousel-next-button"]')
                .should('exist')
                .click({ force: true })
                .click({ force: true })
                
        cy.xpath('//section[1]/descendant::li[13]/descendant::a[1]').should('be.visible')
                .click({ force: true })
                .then((response) => {

                    // Set quantities
                    cy.xpath('//input[@data-testid="sf-quantity-selector input"]').each((qty, idx)=>{
                        const random = Math.floor(Math.random() * 5)

                        cy.wrap(qty).should('be.visible')
                                    .clear()
                                    .type(random)
                                    .then(()=>{
                                        cy.xpath('//button[@class="color-primary sf-button grouped_items--add-to-cart sf-button"]')
                                            .should('be.visible')
                                            .should('contain', 'Add to Cart')
                                    })
                    })

                    /* cy.xpath('//button[@class="color-primary sf-button grouped_items--add-to-cart sf-button"]')
                        .should('be.visible')
                        .should('contain', 'Add to Cart') */

                })
    })  
    
})