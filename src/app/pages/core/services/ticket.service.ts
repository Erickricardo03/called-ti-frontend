import { Injectable } from '@angular/core';
import { TicketResponse, Priority, TicketStatus } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private tickets: TicketResponse[] = [
    { id: 1, subject: 'Erro no login', description: 'Não consigo logar', priority: Priority.HIGH, status: TicketStatus.OPEN },
    { id: 2, subject: 'Atualizar servidor', description: 'Atualização pendente', priority: Priority.MEDIUM, status: TicketStatus.IN_PROGRESS }
  ];

  getTickets(): TicketResponse[] {
    return this.tickets;
  }
  addTicket(ticket: TicketResponse) {
  this.tickets.push(ticket);
}


getTicketById(id: number): TicketResponse | undefined {
  return this.tickets.find(t => t.id === id);
}


}
