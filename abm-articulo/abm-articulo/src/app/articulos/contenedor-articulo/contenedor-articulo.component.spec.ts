import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorArticuloComponent } from './contenedor-articulo.component';

describe('ContenedorArticuloComponent', () => {
  let component: ContenedorArticuloComponent;
  let fixture: ComponentFixture<ContenedorArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorArticuloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenedorArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
