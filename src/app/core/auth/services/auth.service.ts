import { Injectable } from '@angular/core';
import { AccessTokenPayload } from '../models/access-token-payload';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public get tokenPayload(): AccessTokenPayload | null {
    if (!this.token) return null;

    const encodedPayload = this.token.split('.')[1];
    const decodedPayload = atob(encodedPayload);
    const payload = JSON.parse(decodedPayload) as AccessTokenPayload;

    return payload;
  }

  public get isAuthenticated(): boolean {
    if (!this.token) return false;

    const nowUnixTimeInMilliseconds = Date.now();
    const nowUnitTimeInSeconds = Math.floor(nowUnixTimeInMilliseconds / 1000);
    if (nowUnitTimeInSeconds > this.tokenPayload!.exp) {
      this.logout();
      return false;
    }

    return true;
  }

  public isAuthorized(requiredRoleIds: number[]): boolean {
    if (!this.isAuthenticated) return false;

    const tokenRoleIds = this.tokenPayload!.roles.map((role) => role.roleId);
    if (
      !requiredRoleIds.some((requiredRoleId) =>
        tokenRoleIds.includes(requiredRoleId)
      )
    )
      return false;

    return true;
  }

  public logout(): void {
    localStorage.removeItem('access_token');
  }

  protected get token(): string | null {
    return localStorage.getItem('access_token');
  }

  protected set token(token: string) {
    localStorage.setItem('access_token', token);
  }
}
