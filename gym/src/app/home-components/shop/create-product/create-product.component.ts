import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShopService } from 'src/app/shared/shop.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private shopService: ShopService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  submitForm(): void {
    if (this.productForm.valid) {
      const newProduct = this.productForm.value;
      this.shopService.createProduct(newProduct).subscribe({
        next: () => {
          alert('Product created successfully');
          this.router.navigate(['/shop']);
        },
        error: (err) => {
          console.error('Error creating product:', err);
          alert('Failed to create product. Please try again later.');
        }
      });
    }
  }
}
