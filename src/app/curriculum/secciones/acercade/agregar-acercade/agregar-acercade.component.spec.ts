import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAcercadeComponent } from './agregar-acercade.component';

describe('AgregarAcercadeComponent', () => {
  let component: AgregarAcercadeComponent;
  let fixture: ComponentFixture<AgregarAcercadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAcercadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarAcercadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
