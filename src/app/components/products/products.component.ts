import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any = [
    {
      id: 1,
      title: 'Nike Black Addition',
      price: 150,
      quantity: 1,
      imageSrc:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/14bd4ca7-be4a-42e8-989d-363c71df873a/flyby-mid-3-basketball-shoes-jFHsxb.png',
    },
    {
      id: 2,
      title: 'Nike Red Addition',
      price: 180,
      quantity: 1,
      imageSrc: './assets/images/nike-red.jpg',
    },
    {
      id: 3,
      title: 'Nike White Addition',
      price: 200,
      quantity: 1,
      imageSrc: './assets/images/nike-white.jpg',
    },
    {
      id: 4,
      title: 'Addidas Black Addition',
      price: 100,
      quantity: 1,
      imageSrc: './assets/images/Black-Addidas.jpg',
    },
  ];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}
  addToCart(product: any) {
    this.cartService.addToCart2(product);
  }
}
