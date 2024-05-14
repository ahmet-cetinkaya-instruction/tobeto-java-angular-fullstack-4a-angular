import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BasicLayoutComponent } from '../../shared/components/basic-layout/basic-layout.component';
import { CategoryListGroupComponent } from '../../features/categories/components/category-list-group/category-list-group.component';
import { ProductCardListComponent } from '../../features/products/components/product-card-list/product-card-list.component';
import { CategoryListItem } from '../../features/categories/models/category-list-item';
import { ProductListItem } from '../../features/products/models/product-list-item';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BasicLayoutComponent,
    CategoryListGroupComponent,
    ProductCardListComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  seletectedCategory: CategoryListItem | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.categoryIdFromRoute();
  }

  categoryIdFromRoute() {
    this.route.queryParams
      .subscribe((queryParams) => {
        const categoryId: number | undefined = Number(queryParams['category']);
        if (categoryId)
          this.seletectedCategory = {
            id: categoryId,
            name: '',
          };
      })
      .unsubscribe();
  }

  onChangeSelectCategory(event: { selectedCategory: CategoryListItem | null }) {
    this.seletectedCategory = event.selectedCategory;

    const queryParams = {
      category: this.seletectedCategory?.id || null,
    };
    this.router.navigate([], {
      queryParams,
    });
  }

  onViewProduct(event: ProductListItem) {
    this.router.navigate(['products', event.id]); // localhost:4200/products/5
  }
}
