import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService, LoginResponse } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  submit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loading = true;

    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe({
      next: (res: LoginResponse) => {
        this.loading = false;

        localStorage.setItem('token', res.token);
        localStorage.setItem('userEmail', res.email);
        localStorage.setItem('userId', res.userId.toString());

        this.router.navigate(['/tickets']);
      },
      error: () => {
        this.loading = false;

        this.router.navigate(['/tickets']);
      }
    });
  }
}
