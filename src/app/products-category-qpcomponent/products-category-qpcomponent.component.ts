import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-category-qpcomponent',
  templateUrl: './products-category-qpcomponent.component.html',
  styleUrls: ['./products-category-qpcomponent.component.css']
})
export class ProductsCategoryQPComponentComponent {
  constructor (private actR:ActivatedRoute) {}

  id!: Number;

  ngOnInit() {
    this.id = this.actR.snapshot.params["id"];
  }
}
