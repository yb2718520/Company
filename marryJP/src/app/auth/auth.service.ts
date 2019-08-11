import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private vUserIsAuthenticated = false;

  get userIsAuthenticated() {
    return this.vUserIsAuthenticated;
  }

  constructor() { }

  login() {
    this.vUserIsAuthenticated = true;
  }

  logout() {
    this.vUserIsAuthenticated = false;
  }
}
