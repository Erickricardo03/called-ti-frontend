import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../core/services/user.service';
import { Router } from '@angular/router'; // <-- importa o Router

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

roles = ['END_USER', 'ANALYST', 'ADMIN'];

  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    role: new FormControl('USER', Validators.required)
  });

  constructor(private userService: UserService, private router: Router) {} // injeta Router

  submit() {
    if (this.userForm.valid) {
      this.userService.create({
        name: this.userForm.value.name!,
        email: this.userForm.value.email!,
        password: this.userForm.value.password!,
        role: this.userForm.value.role!
      }).subscribe({
        next: res => {
          console.log('Usuário criado', res);
          this.router.navigate(['/users']); // <-- redireciona para a lista de usuários
        },
        error: err => console.error('Erro ao criar usuário', err)
      });
    } else {
      console.log('Formulário inválido');
    }
  }
}
