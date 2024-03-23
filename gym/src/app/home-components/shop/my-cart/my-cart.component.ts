import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/types/cartItem';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotalPrice();
  }

  clearCart(): void {
    const confirmClear = window.confirm('Are you sure you want to clear your cart?');
    if (confirmClear) {
      this.cartService.clearCart();
      this.cartItems = [];
      this.calculateTotalPrice();
      window.alert('Your cart has been cleared.');
    }
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  updateQuantity(event: any, item: CartItem): void {
    item.quantity = event;
    this.cartService.updateCart(this.cartItems);
    this.calculateTotalPrice();
  }

  removeItem(item: CartItem): void {
    const confirmRemove = window.confirm('Are you sure you want to remove this item from your cart?');
    if (confirmRemove) {
      const index = this.cartItems.indexOf(item);
      if (index !== -1) {
        this.cartItems.splice(index, 1);
        this.cartService.updateCart(this.cartItems);
        this.calculateTotalPrice();
      }
    }
  }
}
