import { Component, OnInit } from '@angular/core';
import { never } from 'rxjs';
import { PeliculaServiceService } from '../peliculaService/pelicula-service.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  datos: any = [];

  constructor(private servicio: PeliculaServiceService) { }

  ngOnInit(): void {
    this.datos = [];
    const id = localStorage.getItem('User');
    console.log(id);
    this.servicio.getInventario(id).subscribe( (respuesta: any) => {
        respuesta.forEach((element: any) => {
          this.datos.push(element);
        });
      });
    }
}
