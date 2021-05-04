import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaServiceService } from '../peliculaService/pelicula-service.service';

@Component({
  selector: 'app-historia-usuario',
  templateUrl: './historia-usuario.component.html',
  styleUrls: ['./historia-usuario.component.css']
})
export class HistoriaUsuarioComponent implements OnInit {

  constructor(private service:PeliculaServiceService,private route:Router) {
    this.contador = 0;
   }
  
  
  ListaPagos:any = [];
  contador:number = 0;

  ngOnInit(): void {
    this.service.HistoriaUser(localStorage.getItem("User")).subscribe(res => {
      console.log(res);
      this.ListaPagos = res;
    });
    this.contador = 0;
  }

  obtenerId(valor: any){
    //let temp = document.getElementById("general") as HTMLDivElement;
    //console.log(temp);
    //temp.style.display = "none";
    console.log(this.ListaPagos);
    this.service.MoviesPago(valor).subscribe(res => {
      this.ListaPagos = res;
    });
  }

  sumar(){
    this.contador++
    return this.contador;
  }

  getHeaders() {
    const headers: string[] = [];
    if (this.ListaPagos) {
      this.ListaPagos.forEach((value: {}) => {
        Object.keys(value).forEach((key) => {
          if (!headers.find((header) => header == key)){
            headers.push(key);
          }
        });
      });
    }
    return headers;
  }

}
