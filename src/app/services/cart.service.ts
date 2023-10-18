import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { StorageService } from './storage.service';
import { Cart } from '../models/cart';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  carts: Cart[] = [];
  constructor(private storageService: StorageService) {}
  getCartCount(): number {
    let count: number = 0;

    let tempCart: Cart[] = this.storageService.getCart();
    if (tempCart === null) tempCart = [];

    let tempLogin: User = this.storageService.loggedInUserDetails();
    
    for (let cart of tempCart) {
      if (cart.user.id === tempLogin.id) {
        for (let c of cart.cart) {
          count = c.count! + count;
        }
      }
    }
    return count;
  }

  addToCart(id: number): void {
    let products: Product[] = this.storageService.getAllProducts();

    let loggedInUser: User = this.storageService.loggedInUserDetails();
    let isProductExists: Product | undefined = products.find(
      (p) => p.id === id
    );

    if (isProductExists) {
      let UserCart: Cart | undefined = this.carts.find(
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
        this.carts.push(newCart);
      }
      this.storageService.loadCart(this.carts);
      // console.log(this.carts);
    }
  }
}
