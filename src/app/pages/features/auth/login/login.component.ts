import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;        // formulário
  loading = false;             // controle do botão
  error: string = '';          // <- declare a propriedade error

  constructor(private auth: AuthService, private router: Router) {
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
    this.error = '';

    const email = this.loginForm.get('email')!.value;
    const password = this.loginForm.get('password')!.value;

    this.auth.login(email, password).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigateByUrl('/tickets');
      },
      error: (err) => {
        this.loading = false;
        this.error = err?.error?.message || 'Erro ao autenticar';
      }
    });
  }
}
