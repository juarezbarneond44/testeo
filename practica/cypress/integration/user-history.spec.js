describe('User test', ()=>{
    it('Historial',()=>{
        localStorage.setItem('User','123456789')
        cy.visit('/Historia-usuario')
        for(let i = 0; i < 50; i++){            
            cy.get('table').contains('td', 'Detalle'+i).click();
            cy.wait(3000)
            cy.visit('/Historia-usuario')
        }
        
    })
    
    /*
    Cypress._.times(25, (k) => {
    it(`Historial ${k + 1} / 25`, ()=>{
            localStorage.setItem('User','123456789')
            cy.visit('/Historia-usuario')
            cy.get('#id' + k).click()
            cy.wait(5000)
            cy.visit('/Historia-usuario')
        })
    })
    */
})
