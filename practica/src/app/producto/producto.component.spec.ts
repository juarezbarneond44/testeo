import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MockMovie } from '../Interfaces/MockMovie';
import { PeliculaServiceService } from '../peliculaService/pelicula-service.service';

import { ProductoComponent } from './producto.component';
import { Lenguaje } from '../Interfaces/Lenguaje';
class mockPeliculaServiceService extends PeliculaServiceService{
 
  getMovie(id:any){

    const dummyPosts:MockMovie[] =[
      {id:1,name:'pelicula1',image:"ruta1"},
      {id:2,name:'pelicula2',image:"ruta2"},
      {id:3,name:'pelicula3',image:"ruta3"},
      {id:4,name:'pelicula4',image:"ruta4"},
      {id:5,name:'pelicula5',image:"ruta5"},
      {id:6,name:'pelicula6',image:"ruta6"},
      {id:7,name:'pelicula7',image:"ruta7"},
      ];
      let envio:any=[];
      dummyPosts.forEach(pelicula => {
        if(id===pelicula.id){
            envio.push(pelicula);
        }
      });
     
      return of (envio);
  }
  GetLanguage(id:any){

    const dummyPosts:any[] =[
      {id:0,Description:'Spanish',Code:"ESP",user:1},
      {id:1,Description:'English',Code:"ENG",user:11},
      {id:2,Description:'Spanish',Code:"ESP",user:2},
      {id:3,Description:'English',Code:"ENG",user:3},
      {id:4,Description:'Spanish',Code:"ESP",user:3},
      {id:5,Description:'English',Code:"ENG",user:6},
      {id:6,Description:'Spanish',Code:"ESP",user:8},
      {id:7,Description:'English',Code:"ENG",user:5},
      {id:8,Description:'Spanish',Code:"ESP",user:9},
      {id:9,Description:'English',Code:"ENG",user:4},
      {id:10,Description:'Spanish',Code:"ESP",user:4},
      {id:11,Description:'English',Code:"ENG",user:7},
      {id:12,Description:'Spanish',Code:"ESP",user:3},
      {id:13,Description:'English',Code:"ENG",user:2},
      
      ];
      let envio:any=[];
      dummyPosts.forEach(lenguaje => {
        if(id===lenguaje.user){
            envio.push(lenguaje);
        }
      });
     
      return of (envio);
  }
  GetAvailability(id:any){

    const dummyPosts:any[] =[
      {id:0,name:'10 días + 5 dias gratis',serviceDays:10,user:1},
      {id:1,name:'Plan 3 días',serviceDays:3,user:11},
      {id:2,name:'10 días + 5 dias gratis',serviceDays:10,user:2},
      {id:3,name:'Plan 3 días',serviceDays:3,user:3},
      {id:4,name:'10 días + 5 dias gratis',serviceDays:10,user:3},
      {id:5,name:'Plan 3 días',serviceDays:3,user:6},
      {id:6,name:'10 días + 5 dias gratis',serviceDays:10,user:8},
      {id:7,name:'Plan 3 días',serviceDays:3,user:5},
      {id:8,name:'10 días + 5 dias gratis',serviceDays:10,user:9},
      {id:9,name:'Plan 3 días',serviceDays:3,user:4},
      {id:10,name:'10 días + 5 dias gratis',serviceDays:10,user:4},
      {id:11,name:'Plan 3 días',serviceDays:3,user:7},
      {id:12,name:'10 días + 5 dias gratis',serviceDays:10,user:3},
      {id:13,name:'Plan 3 días',serviceDays:3,user:2},
      ];
      let envio:any=[];
      dummyPosts.forEach(availability => {
        if(id===availability.user){
            envio.push(availability);
        }
      });
     
      return of (envio);
  }
  ExistAlquiler(usuario:any,movie:any){
    const dummyPosts:any[] =[
      {id:1,movie:'pelicula1',usuario:"1"},
      {id:2,movie:'pelicula2',usuario:"2"},
      {id:3,movie:'pelicula3',usuario:"3"},
      {id:4,movie:'pelicula4',usuario:"2"},
      {id:5,movie:'pelicula5',usuario:"5"},
      {id:6,movie:'pelicula6',usuario:"6"},
      {id:7,movie:'pelicula7',usuario:"1"},
      ];
      let envio:any=[];
      dummyPosts.forEach(pelicula => {
        if(id===pelicula.id){
            envio.push(pelicula);
        }
      });
     
      return of (envio);

  }
 
 
  }
describe('ProductoComponent', () => {
  let componentMock: ProductoComponent;
  let service: PeliculaServiceService;
  let router: Router;
  let http: HttpClient ;
  let mockService: mockPeliculaServiceService;
  let rutaActiva: ActivatedRoute

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductoComponent,{
        provide: ActivatedRoute,
        useValue: {
          snapshot: {params: {producto:'2'}}
        }
      }],
      imports: [
        HttpClientTestingModule
      ],
    });
    service=TestBed.get(ProductoComponent);
    router = TestBed.get(Router);
    mockService=new mockPeliculaServiceService(http);
    componentMock=new ProductoComponent(router,rutaActiva,mockService)
    componentMock.id=2 // simulacion del parametro en activedRoute
  });
 
  it('GetMovie', () => {
 
    componentMock.getMovie();
    expect(componentMock.movie.id).toBe(componentMock.id);
  });
  it('GetLanguaje', () => {
    componentMock.getLanguage();
    expect(componentMock.language.length).toBe(2);
  });
  it('GetLanguaje', () => {
    componentMock.getLanguage();
    expect(componentMock.language.length).toBe(2);
  });
  it('Carrito', () => {
    // se  agregan valores para testear
    let cantidad:any=4;
    componentMock.cantidad=cantidad;
 
    componentMock.Carrito();
    expect(componentMock.Carrito()).toBeUndefined()
  });
});
