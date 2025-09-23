import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../../../core/services/ticket.service';
import { TicketResponse, TicketStatus } from '../../../core/models/ticket.model'; 

@Component({
  selector: 'app-ticket-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss']
})
export class TicketDetailComponent {
  ticket?: TicketResponse;
  TicketStatus = TicketStatus; 

  constructor(private ticketService: TicketService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ticketService.getById(id).subscribe({
      next: (ticket) => this.ticket = ticket,
      error: (err) => console.error('Erro ao carregar ticket', err)
    });
  }
}
