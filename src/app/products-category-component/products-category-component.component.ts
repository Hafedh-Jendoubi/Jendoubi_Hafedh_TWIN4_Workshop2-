import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Models/product';

@Component({
  selector: 'app-products-category-component',
  templateUrl: './products-category-component.component.html',
  styleUrls: ['./products-category-component.component.css']
})
export class ProductsCategoryComponentComponent {
  constructor (private actR:ActivatedRoute) {}

  productsByCategory!: Product[];
  id!: Number;
  listProducts: Product[] =
  [
    {
      "id":1,
      "name":"Refrigérateur LGInox",
      "image":"assets/images/categorie_electromenager.jpg",
      "categoryId":1,
      "description":"",
      "price":2800,
      "brand":"LG",
      "promotion":0
    },
    {
      "id":2,
      "name":"Refrigérateur SamsungBlanc",
      "image":"assets/images/categorie_electromenager.jpg",
      "categoryId":1,
      "description":"",
      "price":2400,
      "brand":"Samsung",
      "promotion":0
    },
    {
      "id":3,
      "name":"Lave vaisselle Beko",
      "image":"assets/images/categorie_electromenager.jpg",
      "categoryId":1,
      "description":"",
      "price":1875,
      "brand":"BEKO",
      "promotion":0
    },
    {
      "id":4,
      "name":"Oppo SmartPhone",
      "image":"assets/images/oppo_smart.jpg",
      "categoryId":4,
      "description":"",
      "price":1200,
      "brand":"OPPO",
      "promotion":0
    },
    {
      "id":5,
      "name":"Hachoir",
      "image":"assets/images/hachoir.jpg",
      "categoryId":2,
      "description":"",
      "price":120,
      "brand":"Moulinex",
      "promotion":0
    },
    {
      "id":6,
      "name":"TV 50''LG",
      "image":"assets/images/tv_lg.jpg",
      "categoryId":5,
      "description":"",
      "price":1800,
      "brand":"LG",
      "promotion":0
    }
  ];

  ngOnInit() {
    this.id = this.actR.snapshot.params["id"];
    this.productsByCategory = this.listProducts.filter(p=>p.categoryId == this.id);
    console.log(this.productsByCategory.length);
  }
}
