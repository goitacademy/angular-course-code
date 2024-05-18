import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule],
  templateUrl: './sign-up-modal.component.html',
  styleUrl: './sign-up-modal.component.scss',
})
export class SignUpModalComponent {
  signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SignUpModalComponent>
  ) {
    this.signUpForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const { login, password, email, firstName, lastName } =
        this.signUpForm.value;
      console.log('Login:', login);
      console.log('Password:', password);
      console.log('Email:', email);
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      // TODO - Call the service
      this.dialogRef.close(this.signUpForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  get login() {
    return this.signUpForm.get('login');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get firstName() {
    return this.signUpForm.get('firstName');
  }

  get lastName() {
    return this.signUpForm.get('lastName');
  }
}
