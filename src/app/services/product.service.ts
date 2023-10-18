import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}
  fetchProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }
  loadProducts(products: Product[]) {
    this.storageService.loadAllProduct(products);
  }

  getProducts(): Product[] {
    let tempArr: Product[] = this.storageService.getAllProducts();
    return tempArr;
  }
}
