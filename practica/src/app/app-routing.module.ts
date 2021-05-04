import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AlquilarPeliculaComponent } from './alquilar-pelicula/alquilar-pelicula.component';
import { ProductoComponent } from './producto/producto.component';
import { CarritoComponent } from './carrito/carrito.component';
import { TrasnferenciaComponent } from './trasnferencia/trasnferencia.component';
import { InventarioComponent } from './inventario/inventario.component'
import { RegistrarComponent } from './registrar/registrar.component';
import { AdminComponent } from './admin/admin.component';
import { CreditCardDirectivesModule } from 'angular-cc-library';
 
const routes: Routes = [
  { path: 'AlquilarPeliculas', component: AlquilarPeliculaComponent },
  { path: 'AlquilarPeliculas/:producto', component: ProductoComponent },
  { path: '', component: LoginComponent },
  { path: 'Carrito', component: CarritoComponent },
  { path: 'Transferencia', component: TrasnferenciaComponent },
  { path: 'Registrar', component: RegistrarComponent },
  { path: 'Inventario', component: InventarioComponent },
  { path: 'Admin', component: AdminComponent }
 
  
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CreditCardDirectivesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 