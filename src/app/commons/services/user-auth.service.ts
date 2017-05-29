import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { User } from "firebase";
import * as firebase from 'firebase/app';
import { Observable } from "rxjs";
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from "@angular/router";


@Injectable()
export class UserAuthService implements CanActivate {

  public currentUser: firebase.User;
  constructor(private afAuth: AngularFireAuth, private router: Router) {
    afAuth.authState.subscribe(
      fbUser => {
        this.currentUser = fbUser;
      },
      err => {
        this.currentUser = null;
      },
      () => console.log("Completed: ")
    );
  }

  login() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  logout() {
    this.afAuth.auth.signOut().then(r=>this.router.navigate([""]));
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return Observable.from(this.afAuth.authState)
    .map(fbUser => !!fbUser)
    .do(isLoggedIn => (!isLoggedIn) ? this.router.navigate(["login"]) : "");
  }


}
