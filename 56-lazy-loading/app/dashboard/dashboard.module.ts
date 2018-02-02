import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './containers/dashboard/dashboard.component';

// we removed the dashboard module from the imports it's in the app modules because the app module will be responsible for loading our dashboard module.
export const ROUTES: Routes = [
  {
    // remove the duplicate path.
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule {}
