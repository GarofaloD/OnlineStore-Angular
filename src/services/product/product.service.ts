import { Injectable } from '@angular/core';
import {Product} from "../../common/product";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {resolve} from "@angular/compiler-cli";

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private getProducts_baseUrl = 'https://dummyjson.com/products'


  constructor(private httpClient: HttpClient) { }

  getProductList():Observable<Product[]>{
    return this.httpClient.get<GetResponse>(this.getProducts_baseUrl).pipe(
      map(response=>response._embedded.products)
    )
  }


}

interface GetResponse{
  _embedded:{
    products:Product[];
  }
}
