import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public products: any = [];
  public grandTotal : any ;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }
  removeItem(item: any){
this.cartService.removeCartItem(item)
  }
  emptyCart(){
    this.cartService.emptycart()
  }

  increase(product: any){
    this.cartService.increase(product);
  }
  
  decrease(product: any){
    this.cartService.decrease(product);
  }
}
