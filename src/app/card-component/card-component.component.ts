import { Component, Input } from '@angular/core';
import { Categorie } from '../Models/categorie';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent {
  @Input() category!: Categorie;
}
