import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TicketResponse, Priority, TicketStatus, CreateTicketRequest } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private baseUrl = 'http://localhost:8080/api/tickets';

  constructor(private http: HttpClient) {}

  list(): Observable<TicketResponse[]> {
    return this.http.get<TicketResponse[]>(this.baseUrl);
  }

  create(ticket: CreateTicketRequest): Observable<TicketResponse> {
    return this.http.post<TicketResponse>(this.baseUrl, ticket);
  }
}
