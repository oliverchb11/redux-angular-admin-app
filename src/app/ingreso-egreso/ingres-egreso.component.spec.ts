import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresEgresoComponent } from './ingres-egreso.component';

describe('IngresEgresoComponent', () => {
  let component: IngresEgresoComponent;
  let fixture: ComponentFixture<IngresEgresoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresEgresoComponent]
    });
    fixture = TestBed.createComponent(IngresEgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
