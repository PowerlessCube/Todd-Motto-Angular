// Pre-loading strategies - 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// IMport PreloadAllModules functions
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HttpModule } from '@angular/http';

import { MailModule } from './mail/mail.module';

import { AppComponent } from './app.component';

export const ROUTES: Routes = [
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
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
    // we can also tell our App.module to preload all of our modules. by using 'preloadingStrategy'
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
