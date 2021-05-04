import { Component, OnInit } from '@angular/core';
import { Movie } from '../Interfaces/Movie';
import { PeliculaServiceService } from '../peliculaService/pelicula-service.service';

@Component({
  selector: 'app-trasnferencia',
  templateUrl: './trasnferencia.component.html',
  styleUrls: ['./trasnferencia.component.css']
})
export class TrasnferenciaComponent implements OnInit {

  constructor(private service:PeliculaServiceService) { }
  public cargando=true;
  public transferir=false;
  ngOnInit(): void {
    this.datos()
    this.usuarios()
  }
  private user=localStorage.getItem("User")
  datos(){
    this.seleccionado=0;
    this.cantidad=null;
    this.cargando=true;
    this.service.GetTransaccion(this.user).subscribe((res)=>{
      this.data=res;
      this.cargando=false;
    })
  }
  usuarios(){
    this.service.getUsuario(this.user).subscribe((res)=>{
      console.log(res)
    this.arrayusuarios=res;
    })
  }
  public seleccionado=0;
  public arrayusuarios:any;
  public cantidad=null;
  public disable=false;
  public data:any;
  public datoTransferir:any;
  private cantidadLimite:any;
  private Pelicula:any;
  mostrar(peli:any){
  this.transferir=true;
  this.datoTransferir=peli;
  this.Pelicula=peli;
this.cantidadLimite=peli.cantidad;
this. disable=false;
 
  }
  nextPage(){
    this.transferir=false;
  
  }
  transferencia(){
    if(this.cantidad===null){
      alert("Agrege una cantidad valida")
      return;
    }
    if(this.seleccionado===0){
      alert("Seleccione usuario")
      return;
    }
    if(Number(this.cantidad)>this.cantidadLimite){
      alert("Agrege una cantidad valida")
      return;
    }
    this.disable=true;
  
    this.service.ObetenerSegundaTransaccion(this.seleccionado,this.Pelicula.movie).subscribe((res)=>{
      if(res instanceof Array){
      
        if(res===null||res===[]||res[0]==undefined){
          this.service.CreateTransaccion(this.Pelicula.movie,this.cantidad,this.seleccionado).subscribe((res)=>{
            if(!res){
              alert("Error al hacer la transaccion")
              this.disable=false;
              return;
            }else{
              if(this.cantidad===this.Pelicula.cantidad){
                this.service.EliminarTransferencia(this.Pelicula.id).subscribe((res)=>{
                  this.transferir=false;   this.cargando=true; this.data=[];
                  this.disable=false; this.datos();
                })
              }
              else{
           
                this.service.EditTransaccion(this.Pelicula.id,Number(this.cantidad)*-1).subscribe((res)=>{
                  this.transferir=false;   this.cargando=true; this.data=[];
                  this.disable=false; this.datos();
                })
              }
            }
 
          })
          
        }else{
          this.service.EditTransaccion(res[0].id,this.cantidad).subscribe((res)=>{
            if(this.cantidad===this.Pelicula.cantidad){
              this.service.EliminarTransferencia(this.Pelicula.id).subscribe((res)=>{
                this.transferir=false;
                this.disable=false;
                this.cargando=true; this.data=[];
                this.datos();
              })
            }
            else{
 
              this.service.EditTransaccion(this.Pelicula.id,Number(this.cantidad)*-1).subscribe((res)=>{
                this.transferir=false;
                this.disable=false;
                this.cargando=true;
                this.data=[];
                this.datos();
              })
            }


          })
        }
 
        //aqui se edita la primera transaccion
      }
    })
  }

}