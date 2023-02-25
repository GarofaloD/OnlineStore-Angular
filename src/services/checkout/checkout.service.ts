import { Injectable } from '@angular/core';
import {Purchase} from "../../common/purchase/purchase";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private message: Purchase = new Purchase()



  constructor() { }

  setMessage(data: any){
    this.message = data
  }

  getMessage(){
    return this.message
  }

}
