import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { AlquilarPeliculaComponent } from './alquilar-pelicula/alquilar-pelicula.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule } from '@angular/forms';
import { ProductoComponent } from './producto/producto.component';
import { IonicModule } from '@ionic/angular';
import { LoadingComponent } from './loading/loading.component';
import { CarritoComponent } from './carrito/carrito.component';
import { TrasnferenciaComponent } from './trasnferencia/trasnferencia.component';
import { HistoriaUsuarioComponent } from './historia-usuario/historia-usuario.component';
import { InventarioComponent } from './inventario/inventario.component';
import { AdminComponent } from './admin/admin.component';
import { CreditCardDirectivesModule } from 'angular-cc-library'
 

const routes: Routes = [
  { path: 'Login', component: LoginComponent }, 
  { path: 'Registrar', component: RegistrarComponent },
  { path: 'Historia-usuario', component: HistoriaUsuarioComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    AlquilarPeliculaComponent,
    NavBarComponent,
    LoginComponent,
    RegistrarComponent,
    ProductoComponent,
    LoadingComponent,
    CarritoComponent,
    TrasnferenciaComponent,
    InventarioComponent,
    HistoriaUsuarioComponent,
    AdminComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    CreditCardDirectivesModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
