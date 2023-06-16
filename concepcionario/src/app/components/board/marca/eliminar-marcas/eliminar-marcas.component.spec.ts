import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarMarcasComponent } from './eliminar-marcas.component';

describe('EliminarMarcasComponent', () => {
  let component: EliminarMarcasComponent;
  let fixture: ComponentFixture<EliminarMarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarMarcasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
