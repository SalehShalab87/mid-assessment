import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email!: string;
  password!: string;

  onLogin() {
    if (!this.email || !this.password) {
      alert('Please fill in all required fields.');
      return;
    }
    alert(`Hello, ${this.email}`);
    this.email = '';
    this.password = '';
  }
}
