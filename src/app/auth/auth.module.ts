import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import {MaterialModule} from "../material/material.module";

@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    AuthenticationComponent,
    LoginComponent,
    LogoutComponent

  ]
})
export class AuthModule { }
