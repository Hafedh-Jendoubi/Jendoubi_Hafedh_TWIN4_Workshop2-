import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactModuleRoutingModule } from './contact-module-routing.module';
import { ContactComponentComponent } from './contact-component/contact-component.component';


@NgModule({
  declarations: [
    ContactComponentComponent
  ],
  imports: [
    CommonModule,
    ContactModuleRoutingModule
  ]
})
export class ContactModuleModule { }
