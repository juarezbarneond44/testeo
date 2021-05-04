 
describe('Carrito Test', ()=>{
    it('Carrito',()=>{
        localStorage.setItem('User','123456789')
        cy.visit('/Carrito')
        cy.wait(3000);
        cy.get(`button[id='pago']`).click();
        cy.wait(1000);
        cy.get(`input[id='tarjeta']`).type('7964824976543604');
        cy.wait(1000);
        cy.get(`input[id='nombre']`).type('Juan Carlos Juarez');
        cy.wait(1000);
        cy.get(`input[id='fecha']`).type('12/22');
        cy.wait(1000);
        cy.get(`input[id='codigo']`).type('165');
        cy.wait(1000);
        cy.get('select#moneda').select('7.85');
        cy.get('select#moneda').select('7.85');
        cy.wait(1000);
        cy.get(`button[id='pagar']`).click();
        cy.wait(1000);
    })
}) 


