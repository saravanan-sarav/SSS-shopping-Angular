import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { CartService } from 'src/app/services/cart.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  Loader: Product[] = [];
  orders: Cart[] = [];

  constructor(private storageService: StorageService, private router: Router) {
    this.cartLoader();
  }
  cartLoader(): void {
    let carts: Cart[] = this.storageService.getCart();
    let loggedInUser: User = this.storageService.loggedInUserDetails();
    if (carts) {
      for (let user of carts) {
        if (user.user.id === loggedInUser.id) {
          for (let prod of user.cart) {
            this.Loader.push(prod);
          }
        }
      }
    }
  }

  placeOrder(): void {
    let carts: Cart[] = this.storageService.getCart();
    let loggedInUser: User = this.storageService.loggedInUserDetails();
    let tempCart: Cart[] = [];
    if (carts) {
      for (let user of carts) {
        if (user.user.id !== loggedInUser.id) {
          tempCart.push(user);
        } else {
          this.orders.push(user);
          this.storageService.loadOrders(this.orders);
        }
      }
      carts = tempCart;
      this.storageService.loadCart(carts);
      this.Loader = [];
      this.router.navigate(['orders'], { replaceUrl: true });
    }
  }
}
