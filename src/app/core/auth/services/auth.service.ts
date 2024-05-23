import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public get isAuthenticated(): boolean {
    if (!this.token) return false;

    return true;
  }

  protected get token(): string | null {
    return localStorage.getItem('access_token');
  }

  protected set token(token: string) {
    localStorage.setItem('access_token', token);
  }
}
