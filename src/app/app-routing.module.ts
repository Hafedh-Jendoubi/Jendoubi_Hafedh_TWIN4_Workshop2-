import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ListCategoriesComponentComponent } from './list-categories-component/list-categories-component.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsCategoryComponentComponent } from './products-category-component/products-category-component.component';
import { DetailsCategoryComponentComponent } from './details-category-component/details-category-component.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:"full"}, //Path par defaut, once I launch the project it directs me to home
  {path: 'home', component:HomeComponentComponent,
    children: [
      {path: 'categories', component:ListCategoriesComponentComponent}
    ]
  },
  {path: 'categories', component:ListCategoriesComponentComponent},
  {path: 'categoryDetails', component:DetailsCategoryComponentComponent},
  {path: 'productCategory/:id', component:ProductsCategoryComponentComponent},
  {path: '**', component:NotfoundComponent} //The ** represents random character and it is used if the url is not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
