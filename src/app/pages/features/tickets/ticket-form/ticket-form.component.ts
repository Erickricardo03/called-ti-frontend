import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TicketResponse, Priority, CreateTicketRequest  } from '../../../core/models/ticket.model';
import { TicketService } from '../../../core/services/ticket.service';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent {
  subject: string = '';
  description: string = '';
  priority: Priority = Priority.LOW;
  loading: boolean = false;
  error: string = '';

  constructor(private ticketService: TicketService) {}

  submit() {
    this.loading = true;
    const ticket: CreateTicketRequest = {
      subject: this.subject,
      description: this.description,
      priority: this.priority
    };

    this.ticketService.create(ticket).subscribe({
      next: () => {
        this.loading = false;
        this.subject = '';
        this.description = '';
        this.priority = Priority.LOW;
      },
      error: (err) => {
        this.loading = false;
        this.error = 'Erro ao criar chamado.';
        console.error(err);
      }
    });
  }
}
