import { Injectable, signal } from '@angular/core';
import { io, Socket } from 'socket.io-client';

export interface User {
  id: string;
  name: string;
}

export interface Message {
  user: string;
  text: string;
  time: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket: Socket;
  public users = signal<User[]>([]);
  public messages = signal<Message[]>([]);
  public currentUser = signal<string | null>(null);

  constructor() {
    this.socket = io('http://localhost:3000');

    this.socket.on('userList', (userList: User[]) => {
      this.users.set(userList);
    });

    this.socket.on('message', (message: Message) => {
      this.messages.update(prev => [...prev, message]);
    });
  }

  join(username: string) {
    this.currentUser.set(username);
    this.socket.emit('join', username);
  }

  sendMessage(text: string) {
    this.socket.emit('sendMessage', text);
  }
}
