import { Injectable } from '@angular/core';
import { Categorie } from '../Models/categorie';
import { HttpClient } from '@angular/common/http';
import { ProduitService } from './produit.service';

@Injectable({
  providedIn: 'root' //Visibilité tout le projet (composants et modules)
})

export class CategorieService {
  URL = 'http://localhost:3000/categories';

  constructor(private http: HttpClient, private produitService: ProduitService) { }

  getAllCategories() {
    return this.http.get<Categorie[]>(this.URL);
  }

  getCategoryByID(id: number) {
    return this.http.get(this.URL + '/' + id);
  }

  addCategorie(categorie: Categorie) {
    return this.http.post(this.URL, categorie);
  }

  updateCategorie(categorie: Categorie) {
    return this.http.put(this.URL + '/' + categorie.id, categorie);
  }

  deleteCategorie(id: number) {
    //Delete des produits par categorie car il y'a jointure entre eux, liste de produits ayant categorie
    this.produitService.getProductByCategorie(id).subscribe(
      data => data.forEach(p => this.produitService.deleteProduct(p.id).subscribe()) //On a utlisé subscribe() car chaque methode de service est observable donc il faut ajouter le subscribe, even if we do not have any algorithm to implement
    );
    return this.http.delete(this.URL + '/' + id);
  }
}