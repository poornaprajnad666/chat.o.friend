import { Component, inject } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatService } from '../../services/chat.service';
import { ThemeService, Theme } from '../../services/theme.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, FormsModule, TitleCasePipe],
  templateUrl: './landing.html',
})
export class LandingComponent {
  private chatService = inject(ChatService);
  private router = inject(Router);
  public themeService = inject(ThemeService);
  
  username = '';
  themes: Theme[] = ['midnight', 'neon', 'emerald', 'sunset'];

  join() {
    if (this.username.trim()) {
      this.chatService.join(this.username);
      this.router.navigate(['/chat']);
    }
  }
}
