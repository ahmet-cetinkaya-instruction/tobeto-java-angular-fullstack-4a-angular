import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductListItem } from '../../models/product-list-item';

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

  productDetails!: ProductListItem;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProductDetails();
  }
  getProductDetails() {
    const productDetails = this.productsService.getById(this.productId);
    if (productDetails) this.productDetails = productDetails;
  }
}
