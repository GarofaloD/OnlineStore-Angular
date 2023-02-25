import {Product} from "../product/product";

export class CartItem {

  id: number;
  title: string;
  thumbnail: string;
  price: number;

  quantity: number;

  constructor(product: Product) {
    this.id = product.id;
    this.title = product.title;
    this.thumbnail = product.thumbnail;
    this.price = product.price;

    this.quantity = 1;

  }


}
