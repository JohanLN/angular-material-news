import { Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../../../core/services/theme/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isDarkMode = signal<boolean>(
    JSON.parse(window.localStorage.getItem('darkMode') ?? 'false')
  );

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.isDarkMode.set(!this.isDarkMode());
    if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    }

    window.localStorage.setItem('darkMode', JSON.stringify(this.isDarkMode()));
  }
}
