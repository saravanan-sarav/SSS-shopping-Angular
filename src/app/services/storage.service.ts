import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Product } from '../models/product';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}
  private users: User[] = [
    {
      id: 1,
      userType: 'admin',
      firstName: 'Saravanan',
      lastName: 'S',
      email: 'sarav@user.com',
      phoneNumber: '6379888041',
      password: 's@2001',
    },
    {
      id: 2,
      userType: 'admin',
      firstName: 'Saravanan',
      lastName: 'S',
      email: 'sar@user.com',
      phoneNumber: '6379888041',
      password: 's@2001',
    },
  ];

  // ----Store user details in local Storage----
  loadLocalStorage(user: User[]): void {
    localStorage.setItem('users', JSON.stringify(user));
  }

  loadUsers(): void {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }

  // ----Register the New Users----
  registerUser(user: User): void {
    this.users.push(user);
    this.loadLocalStorage(this.users);
  }

  getAllUsers(): User[] {
    return JSON.parse(localStorage.getItem('users') as string);
  }

  // ----Load and get Porduct----
  loadAllProduct(products: Product[]): void {
    localStorage.setItem('products', JSON.stringify(products));
  }

  getAllProducts(): Product[] {
    return JSON.parse(localStorage.getItem('products') as string);
  }

  // -----User Login or not Details----
  loadLoggedInUser(user: User): void {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
  }

  loggedInUserDetails(): User {
    return JSON.parse(localStorage.getItem('loggedInUser') as string);
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem('loggedInUser') !== null;
  }

  removeLoggedInUser(): void {
    localStorage.removeItem('loggedInUser');
  }

  // ---Cart Load and Get---
  loadCart(cart: Cart[]): void {
    localStorage.setItem('carts', JSON.stringify(cart));
  }

  getCart(): Cart[] {
    return JSON.parse(localStorage.getItem('carts') as string);
  }

  // ----Load and get Orders-----
  loadOrders(orders: Cart[]): void {
    localStorage.setItem('orders', JSON.stringify(orders));
  }

  getOrders(): Cart[] {
    return JSON.parse(localStorage.getItem('orders') as string);
  }
}
