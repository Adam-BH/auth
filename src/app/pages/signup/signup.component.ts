import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(public auth: AuthService, public router: Router) {
    this.auth.State().subscribe((user) => {
      if (user) {
        this.router.navigate(['/home']);
      }
    });
  }

  ngOnInit(): void {}

  signup(email: string, pass: string) {
    this.auth
      .signup(email, pass)
      .then((res) => {
        this.router.navigate(['/home']);
      })
      .catch((err) => {
        alert(err);
      });
  }
}
