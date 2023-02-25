import { Component } from '@angular/core';
import {CheckoutComponent} from "../checkout/checkout.component";
import {CheckoutService} from "../../services/checkout/checkout.service";
import {Purchase} from "../../common/purchase/purchase";

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent {

  purchaseOutput!: Purchase;

  constructor(private checkoutComponent: CheckoutComponent, private checkoutService: CheckoutService) {
  }

  ngOnInit(){
    this.purchaseOutput = this.checkoutService.getMessage();
    console.log(this.purchaseOutput)

  }



}
