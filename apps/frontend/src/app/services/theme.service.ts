import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'midnight' | 'neon' | 'emerald' | 'sunset';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  currentTheme = signal<Theme>((localStorage.getItem('theme') as Theme) || 'midnight');

  constructor() {
    effect(() => {
      const theme = this.currentTheme();
      document.body.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    });
  }

  setTheme(theme: Theme) {
    this.currentTheme.set(theme);
  }
}
