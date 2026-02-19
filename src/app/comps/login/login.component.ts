import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  submitted: boolean = false;

  onLogin(): void {
    if (this.email && this.password) {
      this.submitted = true;
      console.log('Login attempt:', { email: this.email, password: this.password });
      alert(`Welcome ${this.email}!`);
    }
  }
}
