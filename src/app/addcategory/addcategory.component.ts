import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { CategorieService } from '../core/categorie.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent {
  constructor(private categorieService: CategorieService) { }

  myRForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('')]),
    image: new FormControl(),
    description: new FormControl()
  });

  //These are getters in TS.
  get title() {return this.myRForm.get('title');}
  get image() {return this.myRForm.get('image');}
  get description() {return this.myRForm.get('description');}

  showForm(f: NgForm) {
    console.log(f);
  }
}
