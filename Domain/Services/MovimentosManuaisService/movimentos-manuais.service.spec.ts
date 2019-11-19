import { TestBed } from '@angular/core/testing';

import { MovimentosManuaisService } from './movimentos-manuais.service';

describe('MovimentosManuaisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovimentosManuaisService = TestBed.get(MovimentosManuaisService);
    expect(service).toBeTruthy();
  });
});
