import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";

import { PizzaViewerComponent } from "./containers/pizza-viewer.component";
import { DrinkViewerComponent } from "./containers/drink-viewer.component";
import { SideViewerComponent } from "./containers/side-viewer.component";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    AppComponent,
    PizzaViewerComponent,
    DrinkViewerComponent,
    SideViewerComponent
  ],
  imports: [BrowserModule, HttpModule],
  bootstrap: [AppComponent],
  // take the api and register it globally.
  providers: [{ provide: "api", useValue: "/api/pizzas" }] // we can then change our api in this one section here.
})
export class AppModule {}
