import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
  }

  async checkAuthenticated() {
    const authenticated = true; //TODO
    return authenticated;
  }

  async login(username: string, password: string) {

  }

  async logout(redirect: string) {

  }
}
