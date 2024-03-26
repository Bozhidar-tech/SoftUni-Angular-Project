import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { apiUrls } from "../api.urls";
import { Observable } from "rxjs";
import { Product } from "../types/product";

@Injectable({
  providedIn: "root"
})
export class ShopService {
  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('user_id');
    if (token) {
      return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    } else {
      throw new Error('Authorization token missing!');
    }
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${apiUrls.productsServiceApi}getAll`);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${apiUrls.productsServiceApi}${id}`);
  }

  createProduct(productData: Product): Observable<Product> {
    return this.http.post<Product>(`${apiUrls.productsServiceApi}create`, productData, { headers: this.getHeaders() });
  }

  updateProduct(id: string, productData: Product): Observable<Product> {
    return this.http.put<Product>(`${apiUrls.productsServiceApi}${id}`, productData, { headers: this.getHeaders() });
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete<any>(`${apiUrls.productsServiceApi}${id}`, { headers: this.getHeaders() });
  }
}