import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCategoryComponentComponent } from './details-category-component.component';

describe('DetailsCategoryComponentComponent', () => {
  let component: DetailsCategoryComponentComponent;
  let fixture: ComponentFixture<DetailsCategoryComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsCategoryComponentComponent]
    });
    fixture = TestBed.createComponent(DetailsCategoryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
