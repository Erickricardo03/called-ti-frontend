import { Routes } from '@angular/router';
import { LoginComponent } from './pages/features/auth/login/login.component';
import { TicketListComponent } from './pages/features/tickets/tickets-list/tickets-list.component';
import { TicketDetailComponent } from './pages/features/tickets/ticket-detail/ticket-detail.component';
import { TicketFormComponent } from './pages/features/tickets/ticket-form/ticket-form.component';
import { UsersListComponent } from './pages/features/users/users-list/users-list.component';
import { UserFormComponent } from './pages/features/users/user-form/user-form.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'tickets', component: TicketListComponent },
  { path: 'tickets/new', component: TicketFormComponent },
  { path: 'tickets/:id', component: TicketDetailComponent },
  { path: 'users', component: UsersListComponent },      // lista de usuários
  { path: 'users/new', component: UserFormComponent },    // criar usuário
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
