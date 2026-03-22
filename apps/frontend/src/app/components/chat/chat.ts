import { Component, inject, signal, ViewChild, ElementRef } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatService } from '../../services/chat.service';
import { ThemeService, Theme } from '../../services/theme.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, TitleCasePipe],
  templateUrl: './chat.html',
})
export class ChatComponent {
  private chatService = inject(ChatService);
  private router = inject(Router);
  public themeService = inject(ThemeService);
  
  messageText = '';
  themes: Theme[] = ['midnight', 'neon', 'emerald', 'sunset'];
  
  currentUser = this.chatService.currentUser;
  users = this.chatService.users;
  messages = this.chatService.messages;

  constructor() {
    if (!this.currentUser()) {
      this.router.navigate(['/']);
    }
  }

  sendMessage() {
    if (this.messageText.trim()) {
      this.chatService.sendMessage(this.messageText);
      this.messageText = '';
    }
  }

  logout() {
    this.chatService.currentUser.set(null);
    this.router.navigate(['/']);
  }
}
