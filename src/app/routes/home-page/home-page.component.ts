import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CategoryListGroupComponent } from '../../features/categories/components/category-list-group/category-list-group.component';
import { ProductCardListComponent } from '../../features/products/components/product-card-list/product-card-list.component';
import { CategoryListItem } from '../../features/categories/models/category-list-item';
import { ProductListItem } from '../../features/products/models/product-list-item';
import { SharedModule } from '../../shared/shared.module';

@Component({
  standalone: true,
  imports: [
    // CommonModule, // SharedModule içerisinde olduğu için burada tekrar eklemeye gerek yok.
    RouterModule,
    // BasicLayoutComponent,
    SharedModule,
    CategoryListGroupComponent,
    ProductCardListComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  seletectedCategoryId: number | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.categoryIdFromRoute();
  }

  categoryIdFromRoute() {
    this.route.queryParams
      .subscribe((queryParams) => {
        const categoryId: number | undefined = Number(queryParams['category']);
        if (categoryId) this.seletectedCategoryId = categoryId;
      })
      .unsubscribe();
  }

  onChangeSelectCategory(event: { selectedCategory: CategoryListItem | null }) {
    this.seletectedCategoryId = event.selectedCategory?.id || null;

    const queryParams = {
      category: this.seletectedCategoryId,
    };
    this.router.navigate([], {
      queryParams,
    });
  }

  onViewProduct(event: ProductListItem) {
    this.router.navigate(['products', event.id]); // localhost:4200/products/5
  }
}
