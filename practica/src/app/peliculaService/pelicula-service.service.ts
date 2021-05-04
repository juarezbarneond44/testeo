import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../Interfaces/Movie';
import { pago } from '../Interfaces/pago';

@Injectable({
  providedIn: 'root'
})
export class PeliculaServiceService {
 public RutaAux=environment.url;
 private urlRaul='https://my-json-server.typicode.com/CoffeePaw/AyD1API/';
  constructor(private http:HttpClient) {}
   

   GetMovies(){
    return this.http.get(`${this.RutaAux}programador1/GetMovies`);
   }
   getMovie(id:any){
    return this.http.post(`${this.RutaAux}programador1/GetMovie`,{'id':id});
   }
   GetAvailability(id:any){
    return this.http.post(`${this.RutaAux}programador1/GetAvailability`,{'id':id});
   }
   GetLanguage(id:any){
    return this.http.post(`${this.RutaAux}programador1/GetLenguages`,{'id':id});
   }
   ExistAlquiler(usuario:any,movie:any){
    return this.http.post(`${this.RutaAux}programador1/ExistAlquiler`,{'usuario':usuario,"movie":movie});
   }
   InsertAlquiler(codigo:any,usuario:any,name:any,cantidad:any,image:any,chargeRate:any){
 
    return this.http.post(`${this.RutaAux}programador1/InsertAlquiler`,{"codigo":codigo,'usuario':usuario,"name":name,"cantidad":cantidad,"image":image,"chargeRate":chargeRate});
   }
   AddCantidadAlquiler(usuario:any,cantidad:any){
    return this.http.post(`${this.RutaAux}programador1/AddCantidadAlquiler`,{'usuario':usuario,"cantidad":cantidad});
   }
   UpdateMovie(peli:Movie){
    return this.http.post(`${this.RutaAux}programador1/UpdateMovie`,peli);
   }
  GetAlquiler(usuario:any){
    return this.http.post(`${this.RutaAux}programador1/GetAlquiler`,{"id":usuario});
   }
   GetMoviesRaul(){
    return this.http.get(`${this.urlRaul}Movie`);
   }
   GetExchangeRate(){
    return this.http.get(`${this.urlRaul}ExchangeRate`);
   }
   DeleteAlquiler(usuario:any){
    return this.http.put(`${this.RutaAux}programador1/DeleteAlquiler`,{"id":usuario});
   }
   CreatePago(pago:pago){
    return this.http.post(`${this.RutaAux}programador1/CreatePago`,pago);
   }
   UpdateAlquilerPago(id:any){
    return this.http.post(`${this.RutaAux}programador1/UpdateAlquilerPago`,{"id":id});
   }
   GetPago(fecha:any){
    return this.http.post(`${this.RutaAux}programador1/GetPago`,{"fecha":fecha});
   }
   CreatePagoAlquiler(pago:any,alquiler:any){
    return this.http.post(`${this.RutaAux}programador1/CreatePagoAlquiler`,{"pago":pago,"alquiler":alquiler});
   }
   GetTransaccion(id:any){
    return this.http.post(`${this.RutaAux}programador1/GetTransaccion`,{"usuario":id});
   }
   EditTransaccion(idTransaccion:any,cantidad:any){
    return this.http.post(`${this.RutaAux}programador1/EditTransaccion`,{"cantidad":cantidad,"id":idTransaccion});
   }
   ObetenerSegundaTransaccion(usuario:any,movie:any){
    return this.http.post(`${this.RutaAux}programador1/ObetenerSegundaTransaccion`,{"usuario":usuario,"movie":movie});
   }
   getUsuario(user:any){
    return this.http.post(`${this.RutaAux}programador1/getUsuario`,{"user":user});
   }
   CreateTransaccion(movie:any,cantidad:any,usuario:any){
    return this.http.post(`${this.RutaAux}programador1/CreateTransaccion`,{"usuario":usuario,"cantidad":cantidad,"movie":movie});
   }
   EliminarTransferencia(id:any){
    return this.http.put(`${this.RutaAux}programador1/EliminarTransferencia`,{"id":id});
   }
   CreateMovie(movie:Movie){
    return this.http.post(`${this.RutaAux}programador1/CreateMovie`,movie);
   }
   MovieLanguage(id:any,lenguage:any){
    return this.http.post(`${this.RutaAux}programador1/MovieLanguage`,{"id":id,"lenguage":lenguage});
   }
   CreateAvailability(id:any,availability:any){
    return this.http.post(`${this.RutaAux}programador1/CreateAvailability`,{"id":id,"availability":availability});
   }
   LoginUser(correo:any, contrasena: any){
    return this.http.post(`${this.RutaAux}reportuser/GetUser`,{"correo":correo,"contrasena":contrasena});
   }
   HistoriaUser(DPI:any){
    return this.http.post(`${this.RutaAux}reportuser/GetPago`,{"usuario":DPI});
   }
   MoviesPago(pago:any){
    return this.http.post(`${this.RutaAux}reportuser/GetMoviesPago`,{"pago":pago});
   }
   
   RegistraUser(data:any){
    return this.http.post(`${this.RutaAux}programador1/RegistrarUser`,data);
   }
   getInventario(id:any){
    return this.http.post(`${this.RutaAux}programador1/getInventario`,{'id':id});
   }
   getAdmin(){
    return this.http.get(`${this.RutaAux}programador1/getAdmin`);
   }
}  
 