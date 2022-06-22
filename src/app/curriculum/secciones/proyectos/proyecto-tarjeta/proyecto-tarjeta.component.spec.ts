import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoTarjetaComponent } from './proyecto-tarjeta.component';

describe('ProyectoTarjetaComponent', () => {
  let component: ProyectoTarjetaComponent;
  let fixture: ComponentFixture<ProyectoTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
