import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { getLocalStorage } from '../utils/localStorage/localStorage';
import { inject } from '@angular/core';
import { AuthService } from '../core/services/auth/auth.service';
import { Observable, take, tap } from 'rxjs';

export const sesionGuard: CanMatchFn = (route, state): Observable<boolean> => {
  const router = inject(Router);
  const auth = inject(AuthService);

  return auth.isAuth().pipe(
    tap(fbuser => {
      if(!fbuser){
        router.navigateByUrl('auth/login')
      }
    }),
    take(1)
  )
};
