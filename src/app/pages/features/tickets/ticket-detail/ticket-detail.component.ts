// ticket.service.ts
import { Injectable } from '@angular/core';
import { TicketResponse, Priority, TicketStatus } from '../../../core/models/ticket.model';

@Injectable({ providedIn: 'root' })
export class TicketService {
  private tickets: TicketResponse[] = [
    { id: 1, subject: 'Exemplo', description: 'Descrição', priority: Priority.LOW, status: TicketStatus.OPEN }
    // ... outros tickets
  ];

  getTickets(): TicketResponse[] {
    return this.tickets;
  }

  // Adicione este método
  getTicketById(id: number): TicketResponse | undefined {
    return this.tickets.find(t => t.id === id);
  }
}
