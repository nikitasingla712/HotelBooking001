import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from './../user-registration.service';
import { User } from './../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 
  user: User = new User("","","","","","","");
  message: any;

  constructor(private service: UserRegistrationService) { }

  ngOnInit() {
  }

  
  public registerProcess() {
    let response = this.service.doRegistration(this.user);
    response.subscribe((data) => this.message = data);

  }

}
