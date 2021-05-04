import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { alquiler } from '../Interfaces/alquiler';
import { pago } from '../Interfaces/pago';
import { PeliculaServiceService } from '../peliculaService/pelicula-service.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  private usuario=localStorage.getItem("User");
  public Items:any;
  public total:number=0;
  public   datapago:pago={"codigo":null,"fecha":null,"moneda":null,"nombre":"","tarjeta":"","total":0,"usuario":this.usuario};
 
  constructor(private route:Router,private service:PeliculaServiceService) { }
  public pago=false;
  ngOnInit(): void {
    this.service.GetExchangeRate().subscribe((res)=>{
      if(res instanceof Array){
        this.chargeRate=res
        console.log(res)
       
      }
   
    })
    this.data();
  }

  
  data(){
    this.service.GetAlquiler(this.usuario).subscribe((res)=>{
      this.Items=<alquiler>res;
        console.log(this.Items)
      if(this.Items instanceof Array){
        this.total=0;
        this.Items.forEach(element => {
          this.total=this.total+Number(element.precio*element.cantidad)
        });
      }
    })
  }
  comprar(){
    if(this.total==0){
      alert("Carro De Compras Vacio");
      return;
    }
    this.pago=true;
    this.datapago.total=Number((this.total*1).toFixed(2));
    
  
  }
  eliminar(id:any){
    if(confirm("Desea eliminar?")){
      this.service.DeleteAlquiler(id).subscribe((res)=>{this.data();})
    }
    }
    public chargeRate=[{'total':1}];
    public seleccionado=0;
    public disable=false;
    cambio(){  
      this.datapago.moneda=this.seleccionado;
      this.datapago.total=Number((this.total*this.datapago.moneda).toFixed(2));
    }
    confirmarPago(){
    this.disable=true;
      if(this.datapago.tarjeta==""||this.datapago.codigo==null||this.datapago.fecha==null||this.datapago.nombre==""){
        alert("Llene todos los campos");
        return;
      }
       let day=new Date();
       let date=`${day.getFullYear()}-${day.getMonth()+1}-${day.getDate()} ${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`
    
       this.datapago.creacion=date;
      this.service.CreatePago(this.datapago).subscribe((res)=>{
        if(res){
          //get id consulta
          this.service.GetPago(this.datapago.creacion).subscribe((res)=>{
          
           if(res instanceof Array){
            let id=res[0].id;
            if(this.Items instanceof Array){
               this.Items.forEach(element => {
                 //console.log(element)
                  this.service.CreatePagoAlquiler(id,element.id).subscribe((res)=>{})
                  this.service.UpdateAlquilerPago(element.id).subscribe((res)=>{})
               });
               this.pago=false;
               this.Items=[];
               this.total=0;
               this.disable=false;
            }   
           }

            alert("Pago exitoso")
          })
             
        }else{
          this.disable=false;
          console.log("error crear pago")
          alert("Pago Fallido intente mas tarde")
        }
      })
    }
}
