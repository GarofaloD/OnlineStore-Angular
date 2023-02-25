import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CartService} from "../../services/cart/cart.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{


  // @ts-ignore
  checkoutFormGroup: FormGroup;
  totalPrice: number = 0
  totalQuantity: number = 0


  constructor(private formBuilder: FormBuilder, private cartService: CartService) {
  }

  ngOnInit():void{

    this.reviewCartDetails();


    this.checkoutFormGroup = this.formBuilder.group({
      //first form in the group: customer
      customer: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: [''],
      }),
      payment: this.formBuilder.group({
        creditCardNumber: [''],
        creditCardExpirationDate: [''],
        creditCardSecurityCode: [''],
        creditCardZipCode: [''],
      })
    })





  }



  onSubmit(){
    console.log("Handling the submit button")
    console.log(this.checkoutFormGroup.get('customer')?.value);
  }

  //show cart details
  private reviewCartDetails() {

    //get the total price
    this.cartService.totalPrice.subscribe(data =>{
      this.totalPrice = data
    })

    //get the total quantity
    this.cartService.totalQuantity.subscribe(data =>{
      this.totalQuantity = data
    })

  }


}
