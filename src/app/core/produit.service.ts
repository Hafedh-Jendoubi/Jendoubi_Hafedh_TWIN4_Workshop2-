import { Injectable } from '@angular/core';
import { Product } from '../Models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  URL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Product[]>(this.URL);
  }

  getProductByID(id: number) {
    return this.http.get(this.URL + '/' + id);
  }

  getProductByCategorie(idCat: number) {
    return this.http.get<Product[]>(this.URL + '?categoryId=' + idCat);
  }

  addProduct(produit: Product) {
    return this.http.post(this.URL, produit);
  }

  updateProduct(produit: Product) {
    return this.http.put(this.URL + '/' + produit.id, produit);
  }

  deleteProduct(id: number) {
    return this.http.delete(this.URL + '/' + id);
  }
}
