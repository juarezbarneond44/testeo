describe('Alquiler Test', ()=>{
    it('Alquiler',()=>{
        localStorage.setItem('User','123456789')
        cy.visit('/AlquilarPeliculas')
        cy.wait(6000);
        //seleccionar peli
        cy.get(`a[id='foto9']`).click();
        cy.wait(1000);
        cy.get(`input[id='cantidad']`).type(2);
        cy.wait(1000);
        cy.get(`button[id='enviar']`).click();
        cy.wait(1000);
        cy.visit('/Carrito')
        cy.wait(3000);
        cy.get(`button[id='eliminar']`).click();
        cy.wait(1000);
         
    })
}) 


