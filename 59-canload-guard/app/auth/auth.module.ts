// We have an auth module that exports an Auth Service
import { NgModule } from '@angular/core';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  providers: [
    AuthService,
    // defined in ngModule
    AuthGuard
  ]
})
export class AuthModule {}
