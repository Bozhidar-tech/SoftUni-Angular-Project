import { Injectable } from '@angular/core';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = [];

  constructor() { }

  addToCart(product: Product): void {
    this.cart.push(product);
  }

  getCart(): Product[] {
    return this.cart;
  }
}