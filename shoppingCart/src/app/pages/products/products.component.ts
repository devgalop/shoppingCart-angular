import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product.interface';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { ProductsService } from '../../shared/services/products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products!: Product[] ;

  constructor(
    private readonly productSvc: ProductsService,
    private readonly cartSvc: ShoppingCartService
  ) { }

  ngOnInit(): void {
    this.productSvc.getProducts()
        .subscribe(products => this.products = products);
  }

  addToCart(product:Product):void {
    this.cartSvc.updateCart(product);
  }

}
