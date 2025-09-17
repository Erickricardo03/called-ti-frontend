import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../core/services/user.service';
import { UserResponse } from '../../../core/models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class UsersListComponent implements OnInit {
  users$!: Observable<UserResponse[]>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users$ = this.userService.users$;
    this.userService.getAll().subscribe();
  }
}
