import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.userGroup = this.formBuilder.group({
      FirstN: ['', Validators.required],
      LastN: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Address: this.formBuilder.group({
        StreetNumber: ['', Validators.required],
        City: ['', Validators.required],
        CodePostal: ['', Validators.required]
      }),
      Skills: this.formBuilder.array([
        new FormControl('')
      ])
    });
  }

  get Skills() {
    return this.userGroup.get('Skills') as FormArray;
  }

  addSkill() {
    this.Skills.push(new FormControl(''));
  }

  showUser() {
    console.log(this.userGroup);
  }
}
