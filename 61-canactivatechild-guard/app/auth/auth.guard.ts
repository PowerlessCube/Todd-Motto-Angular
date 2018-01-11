import { Injectable } from '@angular/core';
// add in a canActivateChild import
import { CanLoad, CanActivate, CanActivateChild } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
// implement the interface
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {
  constructor(private authService: AuthService) {}
  canLoad() {
    return this.authService.checkPermissions();
  }
  canActivate() {
    return this.authService.isLoggedIn();
  }
  // add the canActivateChild function call.
  canActivateChild() {
    return false;
  }
}