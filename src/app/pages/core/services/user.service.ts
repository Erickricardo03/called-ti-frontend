import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserRequest, UserResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl = 'http://localhost:8080/api/users';

  private usersSubject = new BehaviorSubject<UserResponse[]>([]);
  public users$ = this.usersSubject.asObservable(); 

  constructor(private http: HttpClient) {}

  getAll(): Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(this.apiUrl).pipe(
      tap(users => this.usersSubject.next(users))
    );
  }

  create(user: UserRequest): Observable<UserResponse> {
    return this.http.post<UserResponse>(this.apiUrl, user).pipe(
      tap(newUser => {
        const currentUsers = this.usersSubject.value;
        this.usersSubject.next([...currentUsers, newUser]);
      })
    );
  }
}
