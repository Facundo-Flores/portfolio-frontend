import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarFormacionComponent } from './agregar-formacion.component';

describe('AgregarFormacionComponent', () => {
  let component: AgregarFormacionComponent;
  let fixture: ComponentFixture<AgregarFormacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarFormacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarFormacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
