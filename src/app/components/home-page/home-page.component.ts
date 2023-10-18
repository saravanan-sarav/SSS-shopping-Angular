import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    if (!localStorage.getItem('products')) {
      this.productService.fetchProducts().subscribe({
        next: (data: Product[]) => {
          this.products = data;
          this.productService.loadProducts(this.products);
        },
        complete: () => {
          console.log('fetch completed');
        },
        error: (err: Error) => {
          console.log('Message:', err.message);
          console.log('error Name', err.name);
        },
      });
    } else {
      console.log('else loaded');
      this.products = this.productService.getProducts();
    }
  }
  addToCart(id: number): void {
    this.cartService.addToCart(id);
  }
}
