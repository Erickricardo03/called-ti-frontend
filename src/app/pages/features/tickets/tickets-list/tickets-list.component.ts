import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TicketService } from '../../../core/services/ticket.service';
import { Ticket } from '../../../core/models/ticket.model';  // modelo correto

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tickets-list.component.html'  // cuidado com o nome do arquivo
})
export class TicketListComponent {
  tickets: Ticket[] = []; // lista de tickets

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.tickets = this.ticketService.getTickets();
  }
}
