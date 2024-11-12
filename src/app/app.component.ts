import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mFp = 'msg from parent'; //mFp stands for message for parent

  getValue(data: string) {
    alert(data);
  }
}
