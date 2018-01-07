//act like middle wear btw component and server
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { MailService } from '../../mail.service';
import { Mail } from '../../models/mail.interface';

// 3. Made it an injectable class
@Injectable()
export class MailFolderResolve implements Resolve<Mail[]> {

  constructor(private mailService: MailService) {}
  // ActivatedRouteSnapshot - contains info about current routing, RouterStateSnapshot - which represents the state of the router at this time.
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // route.params will pass a string into getFolder
    return this.mailService.getFolder(route.params.name); //inbox || trash
  }
}
