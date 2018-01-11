// We want to check in our Modules that we can access some particular routes.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { MailAppComponent } from './components/mail-app/mail-app.component';
import { MailViewComponent } from './components/mail-view/mail-view.component';
import { MailViewResolve } from './components/mail-view/mail-view.resolve';
// 1. Import our AuthGuard and AuthModule
import { AuthModule } from '../auth/auth.module';
import { AuthGuard } from '../auth/auth.guard';

import { MailFolderResolve } from './containers/mail-folder/mail-folder.resolve';
import { MailService } from './mail.service';
// Add canActivate guard at our parent level to check whether you are logged in/have access to route.

export const ROUTES: Routes = [
  {
    path: 'mail',
    component: MailAppComponent,
    // Add a can activate on the parent, accepts an array and it's where we add our guards.
    canActivate: [AuthGuard],
    children: [
      {
        path: 'folder/:name',
        component: MailFolderComponent,
        resolve: {
          messages: MailFolderResolve
        }
      },
      {
        path: 'message/:id',
        component: MailViewComponent,
        outlet: 'pane',
        resolve: {
          message: MailViewResolve
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    // 2. include the Module in imports
    AuthModule,
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
    MailViewResolve
  ],
  exports: [
    MailAppComponent
  ]
})
export class MailModule {}
