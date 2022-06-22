import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercadeTarjetaComponent } from './acercade-tarjeta.component';

describe('AcercadeTarjetaComponent', () => {
  let component: AcercadeTarjetaComponent;
  let fixture: ComponentFixture<AcercadeTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercadeTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercadeTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
