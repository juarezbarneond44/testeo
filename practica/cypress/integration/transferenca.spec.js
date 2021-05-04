describe('transferencia Test', ()=>{
    it('transferencia',()=>{
        localStorage.setItem('User','123456789')
        cy.visit('/Transferencia')
        cy.wait(6000);
        cy.get(`a[id='6dttZ1F6']`).click();
        cy.wait(1000);
        cy.get(`input[id='cantidad']`).type(1);
        cy.wait(1000);
        cy.get('select#user').select('Eli Mazariegos');
        cy.wait(1000);
        cy.get(`button[id='button-addon1']`).click();
        cy.wait(1000);
        cy.visit('/Transferencia')
    })
}) 

