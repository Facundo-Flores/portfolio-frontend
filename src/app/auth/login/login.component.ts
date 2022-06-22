import {Component, Inject } from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AuthService,
              @Inject(DOCUMENT) private doc: Document) { }

  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }
}


