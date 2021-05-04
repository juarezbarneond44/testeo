import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaServiceService } from '../peliculaService/pelicula-service.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  constructor(private route:Router,private service:PeliculaServiceService) { }

  ngOnInit(): void {
  }

  registrar(){
      let user = document.getElementById('user') as HTMLInputElement;
      let correo = document.getElementById('correo') as HTMLInputElement;
      let psw = document.getElementById('psw') as HTMLInputElement;
      let nombres = document.getElementById('nombres') as HTMLInputElement;
      let apellidos = document.getElementById('apellidos') as HTMLInputElement;
      let dpi = document.getElementById('dpi') as HTMLInputElement;
      let edad = document.getElementById('edad') as HTMLInputElement;

      if(user.value != "" && correo.value != ""  && psw.value != "" && nombres.value != "" 
        && apellidos.value != "" && dpi.value != "" && edad.value != ""){
            this.service.RegistraUser({"user":user.value, "correo": correo.value, "psw":psw.value, "nombres":nombres.value,
                                      "apellidos":apellidos.value, "dpi":dpi.value, "edad":edad.value}).subscribe((res)=>{
                                        
                if(res){
                  alert("Se registro correctamente")
                  this.route.navigate(['/Login'])
                } else{

                  alert("No se pudo registrar el usuario")
                }                       
            });
        }else{
        alert("Por favor ingrese bien los datos")
      }
  }
}
