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

  //For the main landing page
  public getMainProductList(): Observable<Product[]>{
    return this.httpClient.get<GetResponse>(this.getProducts_baseUrl).pipe(
      map(response => response.products)
    )
  }

  //For individual routes / categories
  public getProductListByCategory(categoryId: string):Observable<Product[]>{
    //url based on the category
    const searchUrl = `${this.getProducts_baseUrl}/category/${categoryId}`

    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response=>response.products)
    )
  }









}

interface GetResponse{

    products:Product[];

}
