import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItem: any = [];
  public produtList = new BehaviorSubject<any>([]);

  constructor() {}

  getProducts() {
    return this.produtList.asObservable();
  }

  setProduct(product: any) {
    this.cartItem.push(...product);
    this.produtList.next(product);
  }

  addToCart(product: any) {
    this.cartItem.push(product);
    this.produtList.next(this.cartItem);
    this.getTotalPrice();
  }

  addToCart2(product: any) {
    let index = this.cartItem.findIndex((p: any) => {
      return p.id === product.id;
    });
    if (index == -1) {
      this.cartItem.push(product);
      this.produtList.next(this.cartItem);
    } else {
      this.cartItem[index].quantity++;
      this.produtList.next(this.cartItem);
    }
  }

  getTotalPrice() {
    return this.cartItem.reduce((total: any, product: any) => {
      return (total += product.price * product.quantity);
    }, 0);
  }

  removeCartItem(product: any) {
    this.cartItem.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItem.splice(index, 1);
      }
    });
    this.produtList.next(this.cartItem);
  }

  emptycart() {
    this.cartItem = [];
    this.produtList.next(this.cartItem);
  }

  increase(product: any) {
    this.cartItem.map((p: any) => {
      if (product.id == p.id && p.quantity >= 1) {
        p.quantity += 1;
      }
    });
  }
  decrease(product: any) {
    this.cartItem.map((p: any) => {
      if (product.id == p.id && p.quantity >= 1) {
        p.quantity -= 1;
      }
    });
  }
}
