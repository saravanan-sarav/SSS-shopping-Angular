import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(
    private router: Router,
    private cartService: CartService,
    private storageService: StorageService
  ) {}

  logout(): void {
    this.storageService.removeLoggedInUser();
    this.router.navigate(['/'], { replaceUrl: true });
  }

  getCount(): number {
    return this.cartService.getCartCount();
  }
}
