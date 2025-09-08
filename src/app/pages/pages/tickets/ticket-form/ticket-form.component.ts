import { Component } from '@angular/core';
import { TicketService } from '../../../core/services/ticket.service';
import { CreateTicketRequest, Priority } from '../../../core/models/ticket.model';


@Component({
selector: 'app-ticket-form',
templateUrl: './ticket-form.component.html',
styleUrls: ['./ticket-form.component.scss'],
standalone: true
})
export class TicketFormComponent {
subject = '';
description = '';
priority: Priority = Priority.LOW;


constructor(private ticketService: TicketService) {}


submit() {
const payload: CreateTicketRequest = {
subject: this.subject,
description: this.description,
priority: this.priority
};
this.ticketService.create(payload).subscribe({
next: () => alert('Chamado criado com sucesso!'),
error: err => console.error(err)
});
}
}