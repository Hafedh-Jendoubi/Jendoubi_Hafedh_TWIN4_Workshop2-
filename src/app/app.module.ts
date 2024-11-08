import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ListCategoriesComponentComponent } from './list-categories-component/list-categories-component.component';
import { HighlighterDirective } from './highlighter.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsCategoryComponentComponent } from './products-category-component/products-category-component.component';
import { DetailsCategoryComponentComponent } from './details-category-component/details-category-component.component';
import { AProposModuleModule } from './apropos-module/apropos-module.module';
import { ContactModuleModule } from './contact-module/contact-module.module';
import { ProductModuleModule } from './product-module/product-module.module';
import { ProfileModuleModule } from './profile-module/profile-module.module';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    HomeComponentComponent,
    ListCategoriesComponentComponent,
    HighlighterDirective,
    SearchPipe,
    NotfoundComponent,
    ProductsCategoryComponentComponent,
    DetailsCategoryComponentComponent,
    AddcategoryComponent,
    UserFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AProposModuleModule,
    ContactModuleModule,
    ProductModuleModule,
    ProfileModuleModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
