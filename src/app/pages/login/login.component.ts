import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public auth: AuthService, public router: Router) {
    this.auth.State().subscribe((user) => {
      if (user) {
        this.router.navigate(['/home']);
      }
    });
  }

  ngOnInit(): void {}

  login(email: string, pass: string) {
    this.auth
      .login(email, pass)
      .then((res) => {
        this.router.navigate(['/home']);
      })
      .catch((err) => {
        alert(err);
      });
  }
}
