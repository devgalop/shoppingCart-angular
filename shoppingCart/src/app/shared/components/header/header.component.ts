import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title!:string
  quantity = this.cartSvc.quatityAction$
  constructor(private cartSvc: ShoppingCartService, private router: Router) { }

  ngOnInit(): void {
  }

  goToCheckOut(): void {
    this.router.navigate(['/checkout']);
  }

}
