import { TestBed } from '@angular/core/testing';
 
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing'
import { PeliculaServiceService } from './pelicula-service.service';
import { MockMovie } from '../Interfaces/MockMovie';

describe('PeliculaServiceService', () => {
  let service: PeliculaServiceService;
  let httpMock:HttpTestingController;
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[PeliculaServiceService],
    });
   service = TestBed.get(PeliculaServiceService);
   httpMock=TestBed.get(HttpTestingController);
  });

afterEach(()=>{
    httpMock.verify();

})

  it('getMovies' , ()=>{
      const dummyPosts:MockMovie[] =[
        {id:1,name:'pelicula1',image:"ruta1"},
        {id:2,name:'pelicula2',image:"ruta2"},
        {id:3,name:'pelicula3',image:"ruta3"},
        {id:4,name:'pelicula4',image:"ruta4"},
        ];
        service.GetMovies().subscribe(res=>{
          if(res instanceof Array)
          expect(res.length).toBe(4);
          expect(res).toEqual(dummyPosts);
        });
        const request=httpMock.expectOne( `${service.RutaAux}programador1/GetMovies`)
        expect(request.request.method).toBe('GET');
        request.flush(dummyPosts);
  })


 /* it('should create', () => {
    expect(component).toBeTruthy();
  });
  */
});
