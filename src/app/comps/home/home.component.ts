import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  appTitle: string = 'Welcome to Angular 20';
  userImageUrl: string = 'assets/profile/catto.jpg';
  isHighlighted: boolean = true;
  currentDate: Date = new Date();

  // Profile data
  userName: string = 'Yael Gale';
  userEmail: string = 'yaelgale@gmailcom';
  userRole: string = 'Developer';
  userBio: string = 'Passionate Angular developer with 5+ years of experience.';
} 
