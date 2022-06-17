import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaTarjetaComponent } from './experiencia-tarjeta.component';

describe('ExperienciaTarjetaComponent', () => {
  let component: ExperienciaTarjetaComponent;
  let fixture: ComponentFixture<ExperienciaTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
