import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {
  user = { isAdmin: true };
  checkPermissions() {
    return Observable.of(this.user.isAdmin);
  }
  // Checks the user is logged in.
  isLoggedIn() {
    // just fed a bollean for purposes of the demo
    return Observable.of(true);
  }
}
