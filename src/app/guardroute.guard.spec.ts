import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardrouteGuard } from './guardroute.guard';

describe('guardrouteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardrouteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
