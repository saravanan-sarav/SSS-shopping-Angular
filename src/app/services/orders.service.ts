import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Product } from '../models/product';
import { User } from '../models/user';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  orders: Cart[] = this.storageService.getOrders();
  constructor(private storageService: StorageService) {}
  addToOrder(id: number): void {
    let products: Product[] = this.storageService.getAllProducts();

    let loggedInUser: User = this.storageService.loggedInUserDetails();
    let isProductExists: Product | undefined = products.find(
      (p) => p.id === id
    );

    if (isProductExists) {
      let UserCart: Cart | undefined = this.orders.find(
        (c) => c.user.id == loggedInUser.id
      );

      if (UserCart) {
        let userProductExists: Product | undefined = UserCart?.cart.find(
          (p) => p.id === id
        );
        let newCart: Product[] = [];
        if (userProductExists) {
          for (let cart of UserCart.cart) {
            // console.log(cart);

            if (cart.id === id) {
              // console.log(cart.count);

              newCart.push({ ...cart, count: cart.count! + 1 });
            } else {
              newCart.push(cart);
            }
          }
          UserCart.cart = newCart;
        } else {
          UserCart.cart.push({ ...isProductExists, count: 1 });
        }
      } else {
        let newCart: Cart = {
          user: loggedInUser,
          cart: [{ ...isProductExists, count: 1 }],
        };
        this.orders.push(newCart);
      }
      this.storageService.loadCart(this.orders);
      // console.log(this.carts);
    }
  }
}
