// A guard is a simple function that gets bound to a routing definition, and the function gets called before transitioning to route.
import { Injectable } from '@angular/core';
// Requires CanLoad to implement it into our AuthGuardClass
import { CanLoad } from '@angular/router';

import { AuthService } from './auth.service';
// There are a few types of route guards and the first one we are going to start with is the canLoad.

@Injectable()
//extend CanLoad
export class AuthGuard implements CanLoad {
  // Inject AuthService in our class
  constructor(private authService: AuthService) {}
  // can load checks user permissions.
  canLoad() {
    return this.authService.checkPermissions();
  }
}