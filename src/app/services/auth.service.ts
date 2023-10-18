import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private storageService: StorageService) {}
  isValidUser(login: User): boolean {
    console.log(login);

    let userDetails: User[] = this.storageService.getAllUsers();
    for (let user of userDetails) {
      if (user.email === login.email && user.password === login.password) {
        this.storageService.loadLoggedInUser(user);
        return true;
      }
    }
    return false;
  }
  isLoggedIn(): boolean {
    return this.storageService.isUserLoggedIn();
  }

  validPassword(): boolean {
    return true;
  }
}
