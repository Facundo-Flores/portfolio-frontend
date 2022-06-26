import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./material/material.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ConfirmarComponent} from './common/confirmar/confirmar.component';
import {AuthHttpInterceptor, AuthModule, HttpMethod} from "@auth0/auth0-angular";
import {environment as env} from "../environments/environment.prod";


@NgModule({
  declarations: [
    AppComponent,
    ConfirmarComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    AuthModule.forRoot({
      ...env.auth0,
      httpInterceptor: {
        allowedList: [
          {
            uri: `${env.api.serverUrl}/api/v1/*`,
            httpMethod: HttpMethod.Get,
            allowAnonymous: true
          },
          {
            uri: `${env.api.serverUrl}/api/v1/*`,
            //allowAnonymous: false
          },

        ],

      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    }
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
