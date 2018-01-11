// Setting up the Resolver, make it injectable
import { Injectable } from '@angular/core';
// added for type checking
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

// bringing in references from MailService and Mail interface
import { MailService } from '../../mail.service';
import { Mail } from '../../models/mail.interface';

@Injectable()
export class MailViewResolve implements Resolve<Mail> {
  // Inject the Mailservice into the constructor.
  constructor(private mailService: MailService) {}
  //Resolve function
  resolve(route: ActivatedRouteSnapshot) {
    // returns the message ID.
    return this.mailService.getMessage(route.params.id);
  }
}