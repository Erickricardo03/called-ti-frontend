import { Component, OnInit } from '@angular/core';
import { TicketResponse, Priority } from '../../../core/models/ticket.model';
import { TicketService } from '../../../core/services/ticket.service';


@Component({
selector: 'app-tickets-list',
templateUrl: './tickets-list.component.html',
styleUrls: ['./tickets-list.component.scss'],
standalone: true
})
export class TicketsListComponent implements OnInit {
tickets: TicketResponse[] = [];


constructor(private ticketService: TicketService) {}


ngOnInit() {
this.ticketService.list().subscribe({
next: data => this.tickets = data,
error: err => console.error(err)
});
}
}