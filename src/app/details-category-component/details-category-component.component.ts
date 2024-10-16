import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-category-component',
  templateUrl: './details-category-component.component.html',
  styleUrls: ['./details-category-component.component.css']
})
export class DetailsCategoryComponentComponent {
  description!: string;

  constructor(private actR:ActivatedRoute){}

  ngOnInit() {
    this.actR.queryParamMap.subscribe(params => this.description = String(params.get('desc')));
  }
}
