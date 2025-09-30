import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { TicketService } from '../../../core/services/ticket.service';
import { TicketResponse, TicketStatus } from '../../../core/models/ticket.model';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.scss']
})
export class TicketListComponent {   
  tickets: TicketResponse[] = [];
  loading = true;
  errorMessage: string | null = null;
  ticketStatuses = Object.values(TicketStatus);

  constructor(private ticketService: TicketService, private router: Router) {}

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets(): void {
    this.ticketService.list().subscribe({
      next: (data) => { this.tickets = data; this.loading = false; },
      error: (err) => { this.errorMessage = 'Erro ao carregar tickets'; this.loading = false; }
    });
  }
}
