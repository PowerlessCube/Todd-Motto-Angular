import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { MailAppComponent } from './components/mail-app/mail-app.component';

import { MailFolderResolve } from './containers/mail-folder/mail-folder.resolve';
import { MailService } from './mail.service';

export const ROUTES: Routes = [
  {
    path: 'folder/:name',
    component: MailFolderComponent,
    // 1. We will be resolving our messages
    resolve: {
      // created property called Messages with a Resolver
      messages: MailFolderResolve
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    MailFolderComponent,
    MailAppComponent,
    MailItemComponent
  ],
  providers: [
    MailService,
    // Add it into providers
    MailFolderResolve
  ],
  exports: [
    MailAppComponent
  ]
})
export class MailModule {}
