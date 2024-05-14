import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BasicLayoutComponent } from '../../../shared/components/basic-layout/basic-layout.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [CommonModule, BasicLayoutComponent],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailPageComponent implements OnInit {
  productId!: number;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.getProductIdFromRoute();
  }

  getProductIdFromRoute() {
    this.route.params.subscribe((routeParams) => {
      const productId: number | undefined = Number(routeParams['productId']);
      console.log(productId);

      // false, 0, null, undefined, NaN, '' => false
      if (!productId) {
        this.router.navigate(['/']);
        throw new Error('Product ID is invalid.');
      }

      this.productId = productId;
    });
  }
}
