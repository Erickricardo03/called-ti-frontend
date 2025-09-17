import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TicketResponse, CreateTicketRequest } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private baseUrl = 'http://localhost:8080/api/tickets'; // Backend

  constructor(private http: HttpClient) {}

  list(): Observable<TicketResponse[]> {
    return this.http.get<TicketResponse[]>(this.baseUrl);
  }

  getById(id: number): Observable<TicketResponse> {
    return this.http.get<TicketResponse>(`${this.baseUrl}/${id}`);
  }

  create(ticket: CreateTicketRequest): Observable<TicketResponse> {
    return this.http.post<TicketResponse>(this.baseUrl, ticket);
  }

  updateStatus(id: number, status: string): Observable<TicketResponse> {
    return this.http.patch<TicketResponse>(`${this.baseUrl}/${id}/status`, { status });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
