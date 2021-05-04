import { isDefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaServiceService } from '../peliculaService/pelicula-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private service:PeliculaServiceService, private router:Router) { }

  ngOnInit(): void {
  }
  iniciar(user:string, contrasena:string){
    if (user === 'admin' && contrasena === '1234') {
      this.router.navigate(['/Admin'])
    }else{
      this.service.LoginUser(user,contrasena).subscribe((respuesta) =>{
        if(respuesta instanceof Array){
          if(respuesta.length !== 0){
            localStorage.setItem('User', respuesta[0].DPI)
            this.router.navigate(['/AlquilarPeliculas'])
          }
        }
      }
    );
    }
  }

} 
