import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopService } from 'src/app/shared/shop.service';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productId?: string;
  product?: Product;
  productForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private shopService: ShopService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    if (this.productId) {
      this.loadProduct();
    }
    this.initForm();
  }

  loadProduct(): void {
    this.shopService.getProductById(this.productId!).subscribe({
      next: (product: Product) => {
        this.product = product;
        this.productForm.patchValue(product);
      },
      error: (error) => {
        console.error('Error fetching product:', error);
        this.errorMessage = 'Failed to fetch product. Please try again later.';
      }
    });
  }

  initForm(): void {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  submitForm(): void {
    if (this.productForm.valid) {
      const updatedProductData = this.productForm.value;
      if (this.productId) {
        this.shopService.updateProduct(this.productId, updatedProductData).subscribe({
          next: () => {
            alert('Product updated successfully');
            this.router.navigate(['/shop']);
          },
          error: (err) => {
            console.error('Error updating product:', err);
            this.errorMessage = 'Failed to update product. Please try again later.';
            alert(this.errorMessage);
          }
        });
      }
    }
  }
}
