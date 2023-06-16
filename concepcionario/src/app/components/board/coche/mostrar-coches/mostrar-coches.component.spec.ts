import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarCochesComponent } from './mostrar-coches.component';

describe('MostrarCochesComponent', () => {
  let component: MostrarCochesComponent;
  let fixture: ComponentFixture<MostrarCochesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarCochesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarCochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
