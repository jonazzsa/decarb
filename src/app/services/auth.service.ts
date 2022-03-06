import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userInfo: any = null;

  constructor(private afa: AngularFireAuth) {
    this.afa.authState.subscribe((auth) => (this.userInfo = auth));
  }

  registerWithEmail(email: string, password: string): any {
    return this.afa
      .createUserWithEmailAndPassword(email, password)
      .then((info: any) => {
        this.userInfo = info;
      }).catch((error) => {throw error})
  }

  loginWithEmail(email: string, password: string): any {
    return this.afa
    .signInWithEmailAndPassword(email, password)
      .then((info: any) => {
        this.userInfo = info;
      }).catch((error) => {throw error})
  }

  logout(): any {
    return this.afa.signOut().then((acc) => {})
  }

}
