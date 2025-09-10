import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserResponse } from '../../../core/models/user.model';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class UsersListComponent implements OnInit {
  users: UserResponse[] = [];
  loading: boolean = false;
  error: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.loading = true;
    this.error = '';
    this.userService.getAll().subscribe({
      next: (data: UserResponse[]) => {
        this.users = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erro ao carregar usuários';
        console.error(err);
        this.loading = false;
      }
    });
  }
}
