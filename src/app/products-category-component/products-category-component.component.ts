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
  categorie!: string;
  listProducts: Product[] = [];

  ngOnInit() {
    //Snapshot
    //this.id = Number(this.actR.snapshot.params["id"]);
    //this.id = Number(this.actR.snapshot.paramMap.get('id));
    //this.productsByCategory = this.listProducts.filter(p=>p.categoryId == this.id);
    
    //Observable
    this.actR.paramMap.subscribe(params => this.id = Number(params.get(('id'))));

    //this.categorie = String(this.actR.snapshot.queryParamMap.get('name'));
    this.actR.queryParamMap.subscribe(params => this.categorie = String(params.get(('name'))));
  }
}
