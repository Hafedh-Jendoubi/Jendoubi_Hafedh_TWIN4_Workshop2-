import { Component, QueryList, ViewChildren } from '@angular/core';
import { Categorie } from '../Models/categorie';
import { Router } from '@angular/router';
import { ShortList } from '../Models/short-list';
import { CardComponentComponent } from '../card-component/card-component.component';
import { CategorieService } from '../core/categorie.service';

@Component({
  selector: 'app-list-categories-component',
  templateUrl: './list-categories-component.component.html',
  styleUrls: ['./list-categories-component.component.css']
})
export class ListCategoriesComponentComponent {
  constructor(private Route:Router, private categorieService: CategorieService) { }

    categories: Categorie[] = [];
    titre = '';
    shortList: ShortList[]=[];

    @ViewChildren(CardComponentComponent) cardList!: QueryList<CardComponentComponent>;

    ngOnInit() {
      this.categorieService.getAllCategories().subscribe(
        (data) => this.categories = data,
        (error) => alert('Liste introuvable'),
        () => alert('Completed')
      );
    }

    ngAfterViewInit() {
      //console.log(this.cardList);
      this.cardList.forEach(card => {
        let data = this.categories.find(e => e.id == card.id);
        if (data?.available == false) {
          card.btnText = 'Indisponible';
          card.isAvailable = false;
        } else {
          card.btnText = 'Voir Produits';
          card.isAvailable = true;
        }
      });
    }

    showDesc(x:string) {
      alert(x);
    }

    addToShortList(data:any) {
      if(this.shortList.find(e => e.idElement == data.idElement && e.idUser == data.idUser)) {
        alert('Element deja in shortlist');
      }else{
        this.shortList.push({id: 1, idUser: data.idUser, idElement:data.idElement, typeElement:'categorie'});
        console.log(this.shortList);
      }
    }
}
