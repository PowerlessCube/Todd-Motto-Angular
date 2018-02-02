import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {
  // typically this would be replaced with a user object, but for demo purposes it's just a boolean
  user = { isAdmin: true };
  
  checkPermissions() { // Checks the permissions of the user.
    return Observable.of(this.user.isAdmin);
  }
  isLoggedIn() {
    return Observable.of(true);
  }
}
