import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoTarjetaComponent } from './curso-tarjeta.component';

describe('CursoTarjetaComponent', () => {
  let component: CursoTarjetaComponent;
  let fixture: ComponentFixture<CursoTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
