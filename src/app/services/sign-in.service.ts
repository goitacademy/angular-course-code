import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Observable, of, tap } from 'rxjs';
import { UserLoginResponse } from '../models/response.models';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  private apiUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  login(email: string, password: string): Observable<UserLoginResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify({ email, password });

    return this.http.post<UserLoginResponse>(`${this.apiUrl}/login`, body, { headers }).pipe(
      tap((response) => {
        if (response.accessToken) {
          this.storageService.setToken(response.accessToken);
        }
      })
    );
  }
}
