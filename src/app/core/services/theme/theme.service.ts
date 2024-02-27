import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkMode = JSON.parse(localStorage.getItem('darkMode') ?? 'false');

  constructor() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  }

  toggleTheme() {
    if (this.isDarkMode) {
      if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
      }
      document.body.classList.add('light-theme');
    } else {
      if (document.body.classList.contains('light-theme')) {
        document.body.classList.remove('light-theme');
      }
      document.body.classList.add('dark-theme');
    }
    localStorage.setItem('darkMode', String(!this.isDarkMode));
  }
}
