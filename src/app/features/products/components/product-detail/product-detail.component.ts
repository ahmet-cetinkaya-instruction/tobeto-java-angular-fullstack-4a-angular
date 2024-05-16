import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductDetails } from '../../models/product-details';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent implements OnInit {
  @Input() productId!: number;

  productDetails!: ProductDetails;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProductDetails();
  }
  getProductDetails() {
    this.productsService.getById(this.productId).subscribe((productDetail) => {
      this.productDetails = productDetail;
      // OnPush
    });
  }
}
