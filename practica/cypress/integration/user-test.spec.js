describe('User test', ()=>{
    it('Llenar el form',()=>{
        cy.visit('/Registrar'); 
        cy.wait(1000);
        cy.get('input[id="user"]').type('Eli');
        cy.wait(1000);
        cy.get('input[id="correo"]').type('elimazariegosr@gmail.com');
        cy.wait(1000);
        cy.get('input[id="psw"]').type('1234');
        cy.wait(1000);
        cy.get('input[id="nombres"]').type('Eli');
        cy.wait(1000);
        cy.get('input[id="apellidos"]').type('Mazariegos');
        cy.wait(1000);
        cy.get('input[id="dpi"]').type('29900152');
        cy.wait(1000);
        cy.get('input[id="edad"]').type('21');
        cy.wait(1000);
        cy.get('#add').click();
        cy.wait(3000);
        
    })
    it('Login',()=>{
        cy.visit('/Login')
        cy.get('input[id="login"]').type('elimazariegosr@gmail.com');
        cy.wait(1000);
        cy.get('input[id="password"]').type('1234');
        cy.wait(1000);
        cy.get('#ingresar').click();
        
    })
})

