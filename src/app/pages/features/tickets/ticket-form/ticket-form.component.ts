import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketService } from '../../../core/services/ticket.service';
import { Priority } from '../../../core/models/ticket.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent {
  Priority = Priority; 
  ticketForm: FormGroup;

  constructor(private fb: FormBuilder, private ticketService: TicketService, private router: Router) {
    this.ticketForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: [Priority.LOW, Validators.required],
      category: ['', Validators.required],
      requesterId: [8, Validators.required],
      assigneeId: [null]
    });
  }

  submit() {
    if (this.ticketForm.valid) {
      this.ticketService.create({
        title: this.ticketForm.value.title!,
        description: this.ticketForm.value.description!,
        priority: this.ticketForm.value.priority!,
        category: this.ticketForm.value.category!,
        requesterId: this.ticketForm.value.requesterId!,
        assigneeId: this.ticketForm.value.assigneeId
      }).subscribe({
        next: res => {
          console.log('Ticket criado', res);
          this.router.navigate(['/tickets']); // <-- redireciona para a lista de tickets
        },
        error: err => console.error('Erro ao criar ticket', err)
      });
    } else {
      console.log('Formulário inválido');
    }
  }
}
