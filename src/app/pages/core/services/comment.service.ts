import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommentResponse } from '../../core/models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl = 'http://localhost:8080/api/comments'; 

  constructor(private http: HttpClient) { }

  listByTicket(ticketId: number): Observable<CommentResponse[]> {
    return this.http.get<CommentResponse[]>(`${this.baseUrl}/ticket/${ticketId}`);
  }

  create(ticketId: number, content: string): Observable<CommentResponse> {
    return this.http.post<CommentResponse>(`${this.baseUrl}/ticket/${ticketId}`, { content });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
