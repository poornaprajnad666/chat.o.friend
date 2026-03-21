import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private chatService = inject(ChatService);
  
  username = '';
  messageText = '';
  
  currentUser = this.chatService.currentUser;
  users = this.chatService.users;
  messages = this.chatService.messages;

  join() {
    if (this.username.trim()) {
      this.chatService.join(this.username);
    }
  }

  sendMessage() {
    if (this.messageText.trim()) {
      this.chatService.sendMessage(this.messageText);
      this.messageText = '';
    }
  }
}
