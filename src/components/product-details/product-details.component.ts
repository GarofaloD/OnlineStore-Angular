
import { Component } from '@angular/core';
import {Product} from "../../common/product/product";
import {ProductService} from "../../services/product/product.service";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../services/cart/cart.service";
import {CartItem} from "../../common/cart-item/cart-item";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  product!: Product; //force unwrap


  constructor(private productService: ProductService, private route: ActivatedRoute, private cartService: CartService) {
  }

  ngOnInit(): void{
    this.route.paramMap.subscribe(data=>{
      this.handleProductDetails();
    })
  }

  private handleProductDetails () {
    //get the id of the product
    const productId : number = +this.route.snapshot.paramMap.get('id')! //force unwrap

    this.productService.getProduct(productId).subscribe(data=>{
      this.product = data
    })
  }

  addToCart(){
    console.log(`Adding to cart: ${this.product.title}, price: ${this.product.price}`)
    const cartItem = new CartItem(this.product);
    this.cartService.addToCart(cartItem);
  }


}
