import { Injectable } from '@angular/core';
import { CartItem } from '../types/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly cartKey = 'cartItems';

  constructor() { }

  getCartItems(): CartItem[] {
    const cartItemsJson = localStorage.getItem(this.cartKey);
    return cartItemsJson ? JSON.parse(cartItemsJson) : [];
  }

  addToCart(cartItem: CartItem): void {
    let cartItems = this.getCartItems();
    cartItems.push(cartItem);
    localStorage.setItem(this.cartKey, JSON.stringify(cartItems));
  }

  clearCart(): void {
    localStorage.removeItem(this.cartKey);
  }

  updateCart(cartItems: CartItem[]): void {
    localStorage.setItem(this.cartKey, JSON.stringify(cartItems));
  }

  incrementCartItemQuantity(index: number): void {
    const cartItems = this.getCartItems();
    cartItems[index].quantity++;
    localStorage.setItem(this.cartKey, JSON.stringify(cartItems));
  }
}
