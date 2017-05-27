import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { User } from "firebase";
import * as firebase from 'firebase/app';


@Injectable()
export class UserAuthService {

  public currentUser = {}
  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(
      result => this.currentUser = result,
      err => this.currentUser = null
    );
  }

  login(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

logout(){
  this.afAuth.auth.signOut();
}

}
