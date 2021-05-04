import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../Interfaces/Movie';
import { PeliculaServiceService } from '../peliculaService/pelicula-service.service';

@Component({
  selector: 'app-alquilar-pelicula',
  templateUrl: './alquilar-pelicula.component.html',
  styleUrls: ['./alquilar-pelicula.component.css']
})
export class AlquilarPeliculaComponent implements OnInit {
public cargando=true;
  constructor(private service:PeliculaServiceService,private route:Router) { }
 
  ngOnInit(): void {
    //this.getMovies();
    this.UpdateMovies()
    
  }
  UpdateMovies(){
    this.service.GetMoviesRaul().subscribe((res)=>{
      if(res instanceof Array){
        console.log(res)
        for (let x = 0; x < res.length; x++) {
          const movie = res[x] as Movie;
          // si no existe se crea
          this.service.getMovie(movie.id).subscribe((peli)=>{
             if(peli instanceof Array){
                if(peli.length===0){
                  this.service.CreateMovie(movie).subscribe((total)=>{
                    // YA QUE SE CREO LA PELI SE CREAN EL ELENGUAJE Y LA DISPONIBILIDAD
                    movie.availabilities.forEach(element => {
                      this.service.CreateAvailability(movie.id,element).subscribe((res)=>{})
                    });
                    movie.languages.forEach(element => {
                      this.service.MovieLanguage(movie.id,element).subscribe((res)=>{})
                    });

                    if(x+1===res.length){
                      this.cargando=false;
                      this.getMovies();
                    }
                  })
                }
                else{
                  this.service.UpdateMovie(movie).subscribe((fin)=>{
                    if(x+1===res.length){
                      this.cargando=false;
                      this.getMovies();
                    }
                  })
                }
             }
          })
 


      
        }
      }
    })
  }
  getMovies(){
    this.service.GetMovies().subscribe((res)=>{
      this.data=res;
      //console.log(res)
    })
  }
  
  mostrar(id:any){
    this.route.navigate([`AlquilarPeliculas/${id}`])
  }
  public data:any;
}
 