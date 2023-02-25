import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart/cart.service";
import {Product} from "../../common/product/product";
import {CartItem} from "../../common/cart-item/cart-item";

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit{

  cartItems: CartItem[] = [];
  totalPrice: number = 0
  totalQuantity: number = 0

  constructor(private cartService: CartService) {

  }

  ngOnInit():void{
    this.listCartDetails()
  }

  listCartDetails(){

    //get the cart items
    this.cartItems = this.cartService.itemsInCart;

    //get the total price
    this.cartService.totalPrice.subscribe(data =>{
      this.totalPrice = data
    })

    //get the total quantity
    this.cartService.totalQuantity.subscribe(data =>{
      this.totalQuantity = data
    })

    this.cartService.calculateCartTotals()

  }

  //For additional buttons
  incrementQuantity(cartItem: CartItem){
    this.cartService.addToCart(cartItem)
  }

  decrementQuantity(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem)
  }

  remove(cartItem: CartItem){
    this.cartService.delete(cartItem)
  }

}
