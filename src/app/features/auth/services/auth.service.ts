import { Injectable } from '@angular/core';
import { LoginCredentials } from '../models/login-credentials';
import { Observable, tap } from 'rxjs';
import { LoggedUser } from '../models/logged-user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiControllerUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  login(loginCredentials: LoginCredentials): Observable<LoggedUser> {
    return this.http
      .post<LoggedUser>(`${this.apiControllerUrl}/login`, loginCredentials)
      .pipe(tap((loggedUser) => this.saveToken(loggedUser.access_token)));
  }

  private saveToken(token: string) {
    localStorage.setItem('access_token', token);
  }
}
