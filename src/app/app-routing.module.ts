import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ListCategoriesComponentComponent } from './list-categories-component/list-categories-component.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsCategoryComponentComponent } from './products-category-component/products-category-component.component';
import { DetailsCategoryComponentComponent } from './details-category-component/details-category-component.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
