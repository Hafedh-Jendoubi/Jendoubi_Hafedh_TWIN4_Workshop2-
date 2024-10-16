import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileModuleRoutingModule } from './profile-module-routing.module';
import { ProfileComponentComponent } from './profile-component/profile-component.component';


@NgModule({
  declarations: [
    ProfileComponentComponent
  ],
  imports: [
    CommonModule,
    ProfileModuleRoutingModule
  ]
})
export class ProfileModuleModule { }
