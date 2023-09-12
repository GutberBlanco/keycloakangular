import { CanActivateFn } from '@angular/router';

export const guardrouteGuard: CanActivateFn = (route, state) => {
  return true;
};
