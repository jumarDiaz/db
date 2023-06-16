import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarVentasComponent } from './actualizar-ventas.component';

describe('ActualizarVentasComponent', () => {
  let component: ActualizarVentasComponent;
  let fixture: ComponentFixture<ActualizarVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarVentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
