import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { SignInService } from '../../services/sign-in.service';

@Component({
  selector: 'app-sign-in-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './sign-in-modal.component.html',
  styleUrl: './sign-in-modal.component.scss'
})
export class SignInModalComponent {
  signInForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SignInModalComponent>,
    public signInService: SignInService,
  ) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      const { email, password } = this.signInForm.value;
      console.log('Email:', email);
      console.log('Password:', password);
      this.signInService.login(email, password).subscribe(() => {
        this.dialogRef.close(this.signInForm.value);
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  get email() {
    return this.signInForm.get('email');
  }

  get password() {
    return this.signInForm.get('password');
  }

}
