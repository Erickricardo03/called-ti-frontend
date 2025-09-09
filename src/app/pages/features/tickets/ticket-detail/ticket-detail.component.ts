import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketResponse } from '../../../core/models/ticket.model';

@Component({
  selector: 'app-ticket-detail',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss']
})
export class TicketDetailComponent {
  @Input() ticket?: TicketResponse;

  get createdAtDate(): Date | null {
    return this.ticket ? new Date(this.ticket.createdAt) : null;
  }
}
