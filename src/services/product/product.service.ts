import { Injectable } from '@angular/core';
import {Product} from "../../common/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {getXHRResponse} from "rxjs/internal/ajax/getXHRResponse";

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private getProducts_baseUrl = 'https://dummyjson.com/products'


  constructor(private httpClient: HttpClient) { }

  public getProductList():Observable<Product[]>{
    return this.httpClient.get<GetResponse>(this.getProducts_baseUrl).pipe(
      map(response=>response.products)
    )
  }








}

interface GetResponse{

    products:Product[];

}
