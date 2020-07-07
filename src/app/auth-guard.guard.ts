import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from './services/login-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate, CanActivateChild {
  constructor(private login: LoginServiceService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.login.validateRoles(next.data.roles)) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.login.validateRoles(next.data.roles)) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
