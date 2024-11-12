import { Component } from '@angular/core';
import { Categorie } from '../Models/categorie';
import { Router } from '@angular/router';
import { ShortList } from '../Models/short-list';

@Component({
  selector: 'app-list-categories-component',
  templateUrl: './list-categories-component.component.html',
  styleUrls: ['./list-categories-component.component.css']
})
export class ListCategoriesComponentComponent {
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

    titre = '';
    shortList: ShortList[]=[];

    constructor (private Route:Router) { }

    showDesc(x:string) {
      alert(x);
    }
}
