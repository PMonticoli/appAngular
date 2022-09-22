import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaArticuloComponent } from './baja-articulo.component';

describe('BajaArticuloComponent', () => {
  let component: BajaArticuloComponent;
  let fixture: ComponentFixture<BajaArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajaArticuloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BajaArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
