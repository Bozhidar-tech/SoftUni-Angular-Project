import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, tap } from 'rxjs/operators';
import { ShopService } from 'src/app/shared/shop.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/types/product';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: Product[] = [];
  productForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private productService: ShopService,
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, Validators.required],
      imageUrl: ['', Validators.required]
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
    this.cartService.addToCart(product);
    console.log('Adding to cart:', product);
  }

  dismissError(): void {
    this.errorMessage = '';
  }
}
