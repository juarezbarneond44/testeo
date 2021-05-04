import {  TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AlquilarPeliculaComponent } from './alquilar-pelicula.component';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PeliculaServiceService } from '../peliculaService/pelicula-service.service';
 
import { RouterTestingModule } from '@angular/router/testing';
import { MockMovie} from '../Interfaces/MockMovie';
 
class mockPeliculaServiceService extends PeliculaServiceService{
 
GetMovies(){
  const dummyPosts:MockMovie[] =[
    {id:1,name:'pelicula1',image:"ruta1"},
    {id:2,name:'pelicula2',image:"ruta2"},
    {id:3,name:'pelicula3',image:"ruta3"},
    {id:4,name:'pelicula4',image:"ruta4"}, 
    ];
return of (dummyPosts);
}
}
describe('AlquilarPeliculaComponent', () => {
  let componentMock: AlquilarPeliculaComponent;
  let service: PeliculaServiceService;
  let router: Router;
  let http: HttpClient ;
  let mockService: mockPeliculaServiceService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ AlquilarPeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlquilarPeliculaComponent],
      imports: [
        HttpClientTestingModule
      ],
    });
    service=TestBed.get(AlquilarPeliculaComponent);
    router = TestBed.get(Router);
    mockService=new mockPeliculaServiceService(http);
    componentMock=new AlquilarPeliculaComponent(mockService,router)
  });
  
it('GetMovies', () => {
  componentMock.getMovies();
  expect(componentMock.data.length).toBe(4);

});
 
});

 
