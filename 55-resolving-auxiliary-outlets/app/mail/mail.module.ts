import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { MailAppComponent } from './components/mail-app/mail-app.component';
import { MailViewComponent } from './components/mail-view/mail-view.component';
// Add our MailViewResolver to the mail.Module
import { MailViewResolve } from './components/mail-view/mail-view.resolve';

import { MailFolderResolve } from './containers/mail-folder/mail-folder.resolve';
import { MailService } from './mail.service';

export const ROUTES: Routes = [
  {
    path: 'folder/:name',
    component: MailFolderComponent,
    // Adding the new resolver
    resolve: {
      messages: MailFolderResolve
    }
  },
  {
    path: 'message/:id',
    component: MailViewComponent,
    outlet: 'pane',
    // Adding the new resolver
    resolve: {
      message: MailViewResolve
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
    MailItemComponent,
    MailViewComponent
  ],
  providers: [
    MailService,
    MailFolderResolve,
    // Include it as a one of our providers.
    MailViewResolve
  ],
  exports: [
    MailAppComponent
  ]
})
export class MailModule {}
