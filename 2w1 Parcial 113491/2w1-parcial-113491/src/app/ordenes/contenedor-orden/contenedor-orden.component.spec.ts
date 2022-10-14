import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorOrdenComponent } from './contenedor-orden.component';

describe('ContenedorOrdenComponent', () => {
  let component: ContenedorOrdenComponent;
  let fixture: ComponentFixture<ContenedorOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorOrdenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenedorOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
