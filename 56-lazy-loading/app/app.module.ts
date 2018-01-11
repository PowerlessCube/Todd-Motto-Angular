// Setting up Lazy loading, we can ship pieces of of our application on demand.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { MailModule } from './mail/mail.module';

import { AppComponent } from './app.component';

// we're using a router-outlet to allow our app.module to route based on each modules routing definitions
// adding a property to our base as our app.module will be responsible for loading our dashboard module (see the load children section).
export const ROUTES: Routes = [
  // requesting the entire module and assigning it at the app level
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' }, // setup may vary, make sure the path is the same to what you are using.
  { path: '**', redirectTo: 'mail/folder/inbox' }
];
// instead of routing to the component directly remove the path to the dashboard module.
@NgModule({
  declarations: [
    AppComponent
  ],
  // and instead of importing our module in the imports, we are asking for it on demand using load children
  imports: [
    BrowserModule,
    HttpModule,
    MailModule,
    RouterModule.forRoot(ROUTES)
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
