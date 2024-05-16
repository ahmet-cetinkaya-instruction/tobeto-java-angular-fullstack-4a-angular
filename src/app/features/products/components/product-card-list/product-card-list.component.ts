import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ProductListItem } from '../../models/product-list-item';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-card-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardListComponent implements OnInit {
  @Input() filterByCategoryId: number | null = null;
  @Output() viewProduct = new EventEmitter<ProductListItem>();

  productList!: ProductListItem[];

  constructor(private productsService: ProductsService, private change:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.productsService.getList().subscribe({
      next: (productList) => {
        console.log('component:', productList);

        this.productList = productList;
        this.change.markForCheck();
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  onViewProduct(product: ProductListItem) {
    this.viewProduct.emit(product);
  }
}
