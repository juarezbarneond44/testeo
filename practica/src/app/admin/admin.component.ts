import { Component, OnInit } from '@angular/core';
import { PeliculaServiceService } from '../peliculaService/pelicula-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  datos: any = [];
  data: any = [];

  constructor(private servicio: PeliculaServiceService) { }

  ngOnInit(): void {
    this.datos = [];
    this.data = [];
    this.servicio.getAdmin().subscribe( (respuesta: any) => {
        respuesta.forEach((element: any) => {
          if (element.estado === 1){
            element.estado = 'Carrito';
          }else if (element.estado === 2){
            element.estado = 'Alquilada';
          }else if (element.estado === 3){
            element.estado = 'Devuelta';
          }
          console.log(element);
          this.datos.push(element);
        });
      });
    this.servicio.GetMoviesRaul().subscribe((res) => {
      this.data = res;
    });
    }

}
