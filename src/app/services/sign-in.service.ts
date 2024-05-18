import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  private apiUrl = '/auth/login';

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  login(login: string, password: string): Observable<{token: string}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify({ login, password });

    return of({
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZmlyc3ROYW1lIjoiSm9obiIsImxhc3ROYW1lIjoiRG9lIiwiZW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsImlhdCI6MTUxNjIzOTAyMn0.GWAB_djq57VNXlAagl0LoOEfl6AeIkFrxClwQV8YQu0',
    }).pipe(
      tap((response) => {
        if (response.token) {
          this.storageService.setToken(response.token);
        }
      })
    );

    // return this.http.post<{token: string}>(this.apiUrl, body, { headers }).pipe(
    //   tap((response) => {
    //     if (response.token) {
    //       this.storageService.setToken(response.token);
    //     }
    //   })
    // );
  }
}
