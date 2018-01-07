import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

// Add filter method to opertator
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <header>
        <img src="/img/logo.svg">
      </header>
      <div class="app__content">
        <nav>
          <a
            routerLink="folder/inbox"
            routerLinkActive="active">
            Inbox
          </a>
          <a
            routerLink="folder/trash"
            routerLinkActive="active">
            Trash
          </a>
        </nav>
        <mail-app></mail-app>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {
    // Navigation events and the RouteRecognized are the most common.
    // Using Navigation End:
    this.router.events
      // Cleaner way of grabbing specific end event
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        // subscribe only called when the NavigationEnd happens
        console.log(event);
      })
  }
}
