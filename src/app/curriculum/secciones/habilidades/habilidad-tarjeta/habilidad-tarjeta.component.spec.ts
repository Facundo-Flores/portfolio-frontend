import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadTarjetaComponent } from './habilidad-tarjeta.component';

describe('HabilidadTarjetaComponent', () => {
  let component: HabilidadTarjetaComponent;
  let fixture: ComponentFixture<HabilidadTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilidadTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
