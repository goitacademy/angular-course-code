import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Observable, tap } from 'rxjs';
import { UserRegisterResponse } from '../models/response.models';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  private apiUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  register(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ): Observable<UserRegisterResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify({
      email,
      password,
      firstName,
      lastName,
    });

    return this.http.post<UserRegisterResponse>(`${this.apiUrl}/register`, body, { headers }).pipe(
      tap((response) => {
        if (response.accessToken) {
          this.storageService.setToken(response.accessToken);
        }
      })
    );
  }
}
