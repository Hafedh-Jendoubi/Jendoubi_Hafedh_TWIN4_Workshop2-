import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AProposModuleRoutingModule } from './apropos-module-routing.module';
import { AProposComponentComponent } from './apropos-component/apropos-component.component';


@NgModule({
  declarations: [
    AProposComponentComponent
  ],
  imports: [
    CommonModule,
    AProposModuleRoutingModule
  ]
})
export class AProposModuleModule { }
