import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ListCategoriesComponentComponent } from './list-categories-component/list-categories-component.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsCategoryComponentComponent } from './products-category-component/products-category-component.component';
import { DetailsCategoryComponentComponent } from './details-category-component/details-category-component.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:"full"}, //Path par defaut, once I launch the project it directs me to home
  {path: 'formulaire', component:UserFormComponent},
  {path: 'home', component:HomeComponentComponent,
    children: [
      {path: 'categories', component:ListCategoriesComponentComponent}
    ]
  },
  {path: 'categories', component:ListCategoriesComponentComponent,
    children:
    [
      {path: 'categoryDetails', component:DetailsCategoryComponentComponent}
    ]
  },  
  {path: 'productCategory/:id', component:ProductsCategoryComponentComponent},

  {path: 'apropos', loadChildren: () => import('./apropos-module/apropos-module.module').then(x => x.AProposModuleModule)},
  {path: 'contact', loadChildren: () => import('./contact-module/contact-module.module').then(x => x.ContactModuleModule)},
  {path: 'product', loadChildren: () => import('./product-module/product-module.module').then(x => x.ProductModuleModule)},
  {path: 'profile', loadChildren: () => import('./profile-module/profile-module.module').then(x => x.ProfileModuleModule)},

  {path: '**', component:NotfoundComponent} //The ** represents random character and it is used if the url is not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
