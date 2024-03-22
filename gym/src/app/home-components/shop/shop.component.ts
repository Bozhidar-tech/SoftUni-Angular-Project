import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, tap } from 'rxjs/operators';
import { ShopService } from 'src/app/shared/shop.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/types/product';
import { CartService } from 'src/app/shared/cart.service';
import { AuthService } from 'src/app/shared/auth.service';
import { CartItem } from 'src/app/types/cartItem';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: Product[] = [];
  productForm!: FormGroup;
  errorMessage: string = '';
  isLoggedIn: boolean = false;

  constructor(
    private fb: FormBuilder,
    private productService: ShopService,
    private router: Router,
    private cartService: CartService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, Validators.required],
      imageUrl: ['', Validators.required]
    });
    this.authService.isLoggedIn$.subscribe(res=>{
      this.isLoggedIn = this.authService.isLoggedIn();
    });
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAllProducts().pipe(
      catchError(error => {
        console.error('Error fetching products:', error);
        this.errorMessage = 'Failed to fetch products. Please try again later.';
        throw this.errorMessage;
      })
    ).subscribe({
      next: (response: any) => {
        if (response && response.success) {
          this.products = response.data || [];
        } else {
          console.error('Failed to fetch products:', response);
          this.errorMessage = 'Failed to fetch products. Please try again later.';
          throw this.errorMessage;
        }
      }
    });
  }

  addProduct(): void {
    if (this.productForm.valid) {
      const newProduct = this.productForm.value;
      this.productService.createProduct(newProduct)
        .pipe(
          tap(() => {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
              this.router.navigate(['/products']);
            });
          }),
          catchError(error => {
            console.error('Error adding product:', error);
            this.errorMessage = 'Failed to add product. Please try again later.';
            throw this.errorMessage;
          })
        )
        .subscribe(() => {
          this.loadProducts();
        });
    }
  }

  deleteProduct(id: string): void {
    this.productService.deleteProduct(id).pipe(
      tap(() => this.products = this.products.filter(product => product._id !== id)),
      catchError(error => {
        console.error('Error deleting product:', error);
        this.errorMessage = 'Failed to delete product. Please try again later.';
        throw this.errorMessage;
      })
    ).subscribe();
  }

  addToCart(product: Product): void {
    // Check if the product already exists in the cart
    const existingCartItemIndex = this.cartService.getCartItems().findIndex(item => item.product._id === product._id);
    
    if (existingCartItemIndex !== -1) {
      // If the product exists in the cart, increment its quantity
      this.cartService.incrementCartItemQuantity(existingCartItemIndex);
    } else {
      // If the product does not exist in the cart, add it as a new item
      const cartItem: CartItem = {
        product: product,
        quantity: 1
      };
      this.cartService.addToCart(cartItem);
    }
  }

  dismissError(): void {
    this.errorMessage = '';
  }
}
