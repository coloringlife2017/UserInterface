import { UserAuthService } from './commons/services/user-auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public userAuthService: UserAuthService) {
  }

 logout() {
    this.userAuthService.logout();
  }  

}
