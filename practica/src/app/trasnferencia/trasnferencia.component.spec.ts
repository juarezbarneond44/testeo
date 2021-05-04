import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasnferenciaComponent } from './trasnferencia.component';

describe('TrasnferenciaComponent', () => {
  let component: TrasnferenciaComponent;
  let fixture: ComponentFixture<TrasnferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrasnferenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrasnferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 /* it('should create', () => {
    expect(component).toBeTruthy();
  });
  */
});
