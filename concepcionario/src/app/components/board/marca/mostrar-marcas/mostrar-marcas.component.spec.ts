import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarMarcasComponent } from './mostrar-marcas.component';

describe('MostrarMarcasComponent', () => {
  let component: MostrarMarcasComponent;
  let fixture: ComponentFixture<MostrarMarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarMarcasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
