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
    this.cartService.clearCart();
    this.cartItems = [];
    this.calculateTotalPrice();
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }


  removeItem(item: CartItem): void {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.cartService.updateCart(this.cartItems);
      this.calculateTotalPrice();
    }
  }
}