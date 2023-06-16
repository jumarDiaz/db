import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCocheComponent } from './agregar-coche.component';

describe('AgregarCocheComponent', () => {
  let component: AgregarCocheComponent;
  let fixture: ComponentFixture<AgregarCocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCocheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarCocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
