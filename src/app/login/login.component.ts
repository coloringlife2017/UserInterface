import { Router } from '@angular/router';
import { UserAuthService } from './../commons/services/user-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userAuthService: UserAuthService, private router:Router) { }

  ngOnInit() {
  }

  login() {
    this.userAuthService.login().then( user => {
      console.log(JSON.stringify(user));
      this.router.navigate([""]);
    });
  }

  logout() {
    this.userAuthService.logout();
  }

}
