// In this video we will write our own lazy loading strategy - Need to have the lazy loading setup for this to work.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Import in our PreloadingStrategy and Route for type checking
import { RouterModule, Route, Routes, PreloadingStrategy } from '@angular/router';
import { HttpModule } from '@angular/http';
//import the observable
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { MailModule } from './mail/mail.module';

import { AppComponent } from './app.component';

// create CustomPreload class that implements PreloadingStrategy
export class CustomPreload implements PreloadingStrategy {
  // requires this preload function
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    // Tell angular the routes that we want to preload.
    return route.data && route.data.preload /*checks it has data and if preload is true*/ ? fn() : Observable.of(null);
  }
}

export const ROUTES: Routes = [
  // we add a data obj with a property of 'preload: true' to this route that says if we want to load this particular object.
  { path: 'dashboard', data: { preload: true }, loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: '**', redirectTo: 'mail/folder/inbox' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  // pass the customerPreload into our providers
  providers: [CustomPreload],
  imports: [
    BrowserModule,
    HttpModule,
    MailModule,
    // add our CustomPreload to our preloadingStrategy.
    RouterModule.forRoot(ROUTES, { preloadingStrategy: CustomPreload })
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
