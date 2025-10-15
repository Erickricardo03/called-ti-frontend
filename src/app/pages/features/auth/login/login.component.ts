import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router'; // ✅ Importa RouterModule
import { AuthService } from '../../../../pages/core/services/auth.service';
import { LoginResponse } from '../../../../pages/core/models/auth.model';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule 
  ],
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
        // Aqui você pode mostrar uma mensagem de erro, se quiser
        this.router.navigate(['/tickets']);
      }
    });
  }
}
