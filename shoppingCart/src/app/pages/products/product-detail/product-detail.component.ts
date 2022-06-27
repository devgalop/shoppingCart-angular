import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit {
  @Input() product!: Product
  @Output() addToCartClick = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }

  addToCart():void {
    this.addToCartClick.emit(this.product);
  }

}
