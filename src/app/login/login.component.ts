import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {AuthenticateService} from '../authenticate.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   
  constructor() { }

  ngOnInit() {
  }
  /*
  email: String;
  password: String;
  invalidLogin = false;
  constructor(private router: Router, private service: AppService, private authService: AuthenticateService) {
  }

  ngOnInit() {
    if (this.service.checkLogin()) {
      this.router.navigate(['home']);
    }
  }

  login() {
    this.authService.authenticate(this.email, this.password).subscribe(
      (data) => {
        this.service.isLoggedIn(true);
        this.invalidLogin = false;
        if (localStorage.getItem('path') === null) {
          this.router.navigate(['home']);
          window.alert('Login SuccessFull');
        } else {
          const path = localStorage.getItem('path');
          localStorage.removeItem('path');
          window.alert('Login Succesful');
          this.router.navigate([path]);
        }
      }, (error) => {
        this.invalidLogin = true;
      }
    );
  } */
}

