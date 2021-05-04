import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculaServiceService } from '../peliculaService/pelicula-service.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(private route:Router,private rutaActiva: ActivatedRoute,private service:PeliculaServiceService) { }

  ngOnInit(): void {
    this.id= this.rutaActiva.snapshot.params.producto;
    this.getMovie();
    this.getLanguage();
    this.getAvailability();
  
  }
private usuario=localStorage.getItem("User");
public cantidad=null;
public id=0;
public disable=false;
public movie:any;
public language:any;
public availability:any;
getMovie(){
  this.service.getMovie(this.id).subscribe((res)=>{
    if(res instanceof Array){
 
      this.movie=res[0];
    
    }
 
  })
}

getLanguage(){
  this.service.GetLanguage(this.id).subscribe((res)=>{
    if(res instanceof Array){
      this.language=res;
    }
 
  })
} 
getAvailability(){
  this.service.GetAvailability(this.id).subscribe((res)=>{
    if(res instanceof Array){
      this.availability=res;
    }
 
  })
}
Carrito(){
 this.disable=true;
  if(this.cantidad=="0"||this.cantidad==null){
    alert("Cantidad erronea!!");
    return;
  }
  // se crea el alquiler
  this.service.ExistAlquiler(this.usuario,this.movie.name).subscribe((res)=>{
 
    if(res instanceof Array){
      if(res.length==0){
      
        this.service.InsertAlquiler(this.ALFANUM_RANDOM(8),this.usuario,this.movie.name,this.cantidad,this.movie.image,this.movie.chargeRate).subscribe((res)=>{
          if(res){
            this.cantidad=null;
            alert("Se agrego al carrito");      this.disable=false;
            return;
          }
          else{
            alert("Error al ingresar al carrito");      this.disable=false;
            return;
          }
        })
      }
      else{
        
      this.service.AddCantidadAlquiler(res[0].id,this.cantidad).subscribe((res)=>{
        if(res){
          alert("Se agrego al carrito");
          this.disable=false;
          this.cantidad=null;
          return;
        }
        else{
          alert("Error al ingresar al carrito");      this.disable=false;
          return;
        }
      })
      }


    }
  })

}
nextPage(){
  this.route.navigate(["AlquilarPeliculas"]);
}

  ALFANUM_RANDOM(nNumero: number): string {
  //Componemos variables
  let numeros: string = '0123456789';
  let letras = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  
  //concatenamos variables
  let sCadena = (numeros + letras )
  //Obtenemos largo
  let lCadena = sCadena.length
  //extraemos elementos aletarioamente de la sCadena
  let MiCadena = '';
  for (let i = 0; i < nNumero; i++) {
    MiCadena += sCadena.charAt(Math.floor(Math.random() * lCadena));
  }
  //pasamos datos al resultado
  return MiCadena;
}
}
