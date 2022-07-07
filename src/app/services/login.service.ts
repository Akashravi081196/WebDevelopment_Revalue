import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private webService: WebService) { }

  isLoggedIn() {
    let y = localStorage.getItem("username");
    if ( y == null || y == "") return false;
    return true;
  }

  doLogin(credential: any) {
    return this.webService.post('/api/user', credential);
  }

  loggedIn(username: string) {
    localStorage.setItem("username", username);
  }
}
