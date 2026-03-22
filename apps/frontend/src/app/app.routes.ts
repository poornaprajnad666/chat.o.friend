import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing';
import { ChatComponent } from './components/chat/chat';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'chat', component: ChatComponent },
  { path: '**', redirectTo: '' }
];
