import { Component } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent {
  orders: Cart[] = this.storageService.getOrders();
  Loader: Cart[] = [];
  constructor(private storageService: StorageService) {
    this.ordersLoad();
  }
  ordersLoad(): void {
    let loggedInUser: User = this.storageService.loggedInUserDetails();
    if (this.orders) {
      let orders: Cart[] = this.storageService.getOrders();

      for (let order of orders) {
        if (order.user.id === loggedInUser.id) {
          console.log(order);

          this.Loader.push(order);
        }
      }
    }
  }
}
