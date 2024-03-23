import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../types/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly cartKey = 'cartItems';
  private cartItemsSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>(this.getCartItems());
  cartItems$: Observable<CartItem[]> = this.cartItemsSubject.asObservable();

  constructor() { }

  getCartItems(): CartItem[] {
    const cartItemsJson = localStorage.getItem(this.cartKey);
    return cartItemsJson ? JSON.parse(cartItemsJson) : [];
  }

  private updateCartItems(cartItems: CartItem[]): void {
    localStorage.setItem(this.cartKey, JSON.stringify(cartItems));
    this.cartItemsSubject.next(cartItems);
  }

  addToCart(cartItem: CartItem): void {
    let cartItems = this.getCartItems();
    cartItems.push(cartItem);
    this.updateCartItems(cartItems);
  }

  clearCart(): void {
    localStorage.removeItem(this.cartKey);
    this.cartItemsSubject.next([]);
  }

  updateCart(cartItems: CartItem[]): void {
    this.updateCartItems(cartItems);
  }

  incrementCartItemQuantity(index: number): void {
    const cartItems = this.getCartItems();
    cartItems[index].quantity++;
    this.updateCartItems(cartItems);
  }
}
