import { Injectable } from '@angular/core';

import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public auth: Auth) {}

  signup(email: string, pass: string) {
    return createUserWithEmailAndPassword(this.auth, email, pass);
  }

  login(email: string, pass: string) {
    return signInWithEmailAndPassword(this.auth, email, pass);
  }

  logout() {
    return this.auth.signOut();
  }

  State() {
    return authState(this.auth);
  }
}
