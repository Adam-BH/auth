import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public auth: AuthService, public router: Router) {
    this.auth.State().subscribe((user) => {
      if (!user) {
        this.router.navigate(['/login']);
      }
    });
  }

  ngOnInit(): void {}

  logout() {
    this.auth
      .logout()
      .then((res) => {
        this.router.navigate(['/login']);
      })
      .catch((err) => {
        alert(err);
      });
  }
}
