import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  imports: [FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  addNewUser() {
    if (!this.name || !this.email || !this.password || !this.confirmPassword) {
      alert('All fields are required!');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const newUser = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    console.log('New User:', newUser);
    alert('User added successfully!');
    this.resetForm();
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }
}
