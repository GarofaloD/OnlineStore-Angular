import {CartItem} from "../cart-item/cart-item";
import {catchError} from "rxjs";

export class OrderItem {

  thumbnail: string;
  price: number;
  quantity: number;
  id: number;
  title: string


  constructor(cartItem: CartItem) {

    this.thumbnail = cartItem.thumbnail;
    this.price = cartItem.price;
    this.quantity = cartItem.quantity;
    this.id = cartItem.id;
    this.title = cartItem.title

  }


}
