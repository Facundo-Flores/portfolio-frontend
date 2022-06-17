import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./material/material.module";
import {HttpClientModule} from "@angular/common/http";
import { ConfirmarComponent } from './common/confirmar/confirmar.component';
import { AuthenticationComponent } from './common/auth/authentication/authentication.component';
import { LoginComponent } from './common/auth/login/login.component';
import { LogoutComponent } from './common/auth/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmarComponent,
    AuthenticationComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
