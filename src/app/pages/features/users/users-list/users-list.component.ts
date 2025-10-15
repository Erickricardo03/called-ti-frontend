import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface User {
  id: number;
  name: string;
  email: string;
  role?: string;
}

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  // Mock de usuários para portfólio
  users: User[] = [
    { id: 1, name: 'Ney Jhonson', email: 'ney@works.com', role: 'Admin' },
    { id: 2, name: 'Marcello Ricardo', email: 'marcello@works.com', role: 'User' },
    { id: 3, name: 'Jailson Lima', email: 'jailson@works.com', role: 'User' }
  ];
}
