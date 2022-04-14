import { Injectable } from '@angular/core';
import { SessionUserModel } from '../components/login/models/session-user.model';

@Injectable({
  providedIn: 'root',
})
export class UserStorageService {
  private key: string = 'ng-auth';

  constructor() {}

  get user(): SessionUserModel {
    debugger
    let user = localStorage.getItem(this.key);
    if (user) {
      let objUser = JSON.parse(user);
      return objUser.user as SessionUserModel;
    }
    return new SessionUserModel();
  }

  get isAuthenticated(): boolean {
    return localStorage.getItem(this.key) !== null;
  }

  set(object: any): void {
    localStorage.setItem(this.key, JSON.stringify(object));
  }

  destroy(): void {
    localStorage.removeItem(this.key);
  }
}
