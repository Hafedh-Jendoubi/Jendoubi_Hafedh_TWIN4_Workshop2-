import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent {
  @Input() title!: string;
  @Input() image!: string;
  @Input() description!: string;
  @Input() id!: number;
  @Input() btnText!: string;
  @Input() isAvailable!: boolean;
  @Output() sender = new EventEmitter();
  
  addToParent() {
    this.sender.emit({idUser: 1, idElement: this.id})
  }
}
