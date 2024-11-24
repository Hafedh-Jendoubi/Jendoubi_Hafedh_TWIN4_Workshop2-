import { Injectable } from '@angular/core';
import { Categorie } from '../Models/categorie';

@Injectable({
  providedIn: 'root' //Visibilité tout le projet (composants et modules)
})
export class CategorieService {
  categories : Categorie[]=[
    {
      "id": 1,
      "title": "Grand électroménager",
      "image":"assets/images/categorie_electromenager.jpg",
      "description": "electromenager",
      "available": true
    },
    {
      "id": 2,
      "title": "Petit électroménager",
      "image": "assets/images/categorie_petit_electromenager.jpg",
      "description": "electromenager",
      "available": false
    },
    {
      "id": 3,
      "title": "Produits informatiques",
      "image": "assets/images/categorie_produits_informatiques.jpg",
      "description": "informatique",
      "available": true
    },
    {
      "id": 4,
      "title": "Smart Phones",
      "image": "assets/images/categorie_smartPhone.jpg",
      "description": "phone",
      "available": true
    },
    {
      "id": 5,
      "title": "TV, images et son",
      "image": "assets/images/categorie_tv_image_son.jpg",
      "description": "tv",
      "available": true
    },
    {
      "id": 6,
      "title": "Produits voiture",
      "image": "assets/images/produits_nettoyages.jpg",
      "description": "car",
      "available": false
    }
  ];

  constructor() { }

  getAllCategories() {
    return this.categories;
  }

  getCategoryByID(id: number) {
    return this.categories.find(e => e.id == id);
  }

  addCategorie(categorie: Categorie) {
    this.categories.push(categorie);
  }

  deleteCategorie(id: number) {
    this.categories = this.categories.filter(e => e.id != id);
  }

  updateCategorie(categorie: Categorie) {
    let index = this.categories.findIndex(e => e.id == categorie.id);
    this.categories[index] = categorie;
  }
}
