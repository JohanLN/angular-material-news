import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    RouterModule,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  constructor(private router: Router) {}

  navigateToSignup() {
    this.router.navigateByUrl('/signup');
  }

  navigateToLogin() {
    this.router.navigateByUrl('/login');
  }
}
