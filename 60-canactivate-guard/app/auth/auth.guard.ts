import { Injectable } from '@angular/core';
// Add the CanActivate to the imports from Angular
import { CanLoad, CanActivate } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
// add it to the implements
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private authService: AuthService) {}
  canLoad() {
    return this.authService.checkPermissions();
  }
  // checks whether we are logged in or not.
  canActivate() {
    return this.authService.isLoggedIn();
  }
}