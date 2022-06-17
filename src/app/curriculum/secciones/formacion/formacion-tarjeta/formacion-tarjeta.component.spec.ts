import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionTarjetaComponent } from './formacion-tarjeta.component';

describe('FormacionTarjetaComponent', () => {
  let component: FormacionTarjetaComponent;
  let fixture: ComponentFixture<FormacionTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormacionTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormacionTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
