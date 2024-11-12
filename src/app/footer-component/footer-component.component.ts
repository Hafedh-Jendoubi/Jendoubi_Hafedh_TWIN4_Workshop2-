import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent {
  @Input() received!: string;
  x!: string;
  @Output() sender = new EventEmitter<string>(); //<string> is to cast it to gain memory or somthing like that and we've chosen string cause our var to send is to type string

  sendToParent() {
    this.received = this.received + " " + this.x;
    this.sender.emit(this.received);
  }
}
