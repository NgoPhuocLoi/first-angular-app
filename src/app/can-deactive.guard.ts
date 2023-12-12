import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactive {
  canDeactive?: () => Observable<boolean> | Promise<boolean> | boolean;
}

export const canDeactiveFn: CanDeactivateFn<CanComponentDeactive> = (
  component: CanComponentDeactive
) => {
  return component.canDeactive ? component.canDeactive() : true;
};
