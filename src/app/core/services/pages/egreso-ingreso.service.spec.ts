import { TestBed } from '@angular/core/testing';

import { EgresoIngresoService } from './egreso-ingreso.service';

describe('EgresoIngresoService', () => {
  let service: EgresoIngresoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EgresoIngresoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
