import { Component, Input } from '@angular/core';
import { TicketResponse } from '../../../core/models/ticket.model';
import { DatePipe } from '@angular/common'; 

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss'],
  standalone: true,
  imports: [DatePipe] 
})
export class TicketDetailComponent {
  @Input() ticket?: TicketResponse;

  get createdAtDate(): Date | null {
    return this.ticket ? new Date(this.ticket.createdAt) : null;
  }
}
