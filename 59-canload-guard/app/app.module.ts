// Setting up a Routing guard to prevent a user with out access from hitting routes they are not suppose too.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { MailModule } from './mail/mail.module';
import { AuthModule } from './auth/auth.module';
// import our Authguard.
import { AuthGuard } from './auth/auth.guard';

import { AppComponent } from './app.component';

// Our Auth guard gets called  before the route gets loaded.
export const ROUTES: Routes = [
  // add canLoad which accepts an array and pass in our guard
  { path: 'dashboard', canLoad: [AuthGuard], loadChildren: './dashboard/dashboard.module#DashboardModule' },
  // canload lets us decide if the current user is allowed to load our module.
  { path: '**', redirectTo: 'mail/folder/inbox' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MailModule,
    AuthModule,
    RouterModule.forRoot(ROUTES)
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
