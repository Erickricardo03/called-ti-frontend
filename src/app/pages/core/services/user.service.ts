import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRequest, UserResponse } from '../models/user.model'; // ajuste o caminho conforme sua estrutura

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl = 'http://localhost:8080/api/users'; // URL do backend

  constructor(private http: HttpClient) {}

  /** Lista todos os usuários */
  getAll(): Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(this.apiUrl);
  }

  /** Busca um usuário pelo ID */
  getById(id: number): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.apiUrl}/${id}`);
  }

  /** Cria um novo usuário */
  create(user: UserRequest): Observable<UserResponse> {
    return this.http.post<UserResponse>(this.apiUrl, user);
  }

  /** Atualiza um usuário existente */
  update(id: number, user: UserRequest): Observable<UserResponse> {
    return this.http.put<UserResponse>(`${this.apiUrl}/${id}`, user);
  }

  /** Deleta um usuário pelo ID */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
