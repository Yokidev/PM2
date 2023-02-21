import { TestBed } from '@angular/core/testing';

import { MensajeroService } from './mensajero.service';

describe('MensajeroService', () => {
  let service: MensajeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensajeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
