import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AppService} from './app.service';

export class User {
  constructor(
    public status: string,
  ) { }

}
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient, private appService: AppService) {
  }

  authenticate(email, password) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(email + ':' + password)});
    return this.http.get('http://localhost:8181/login', {headers}).pipe(
      map(data => {
          this.appService.isAdmin(data);
          localStorage.setItem('token', btoa(email + ':' + password));
        }
      ));
  }

  signOut() {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8080/user/logout', {headers});
  }

  signUp(user) {
    return this.http.post('http://localhost:8080/user/sign-up', user);
  }

}


