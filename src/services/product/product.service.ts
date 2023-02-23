import { Injectable } from '@angular/core';
import {Product} from "../../common/product/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {getXHRResponse} from "rxjs/internal/ajax/getXHRResponse";
import {ProductCategory} from "../../common/product-category/product-category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private getProducts_baseUrl = 'https://dummyjson.com/products'
  private getCategories_URL = 'https://dummyjson.com/products/categories'


  constructor(private httpClient: HttpClient) { }

  //For the main landing page
  public getMainProductList(): Observable<Product[]>{
    return this.httpClient.get<GetResponseProducts>(this.getProducts_baseUrl).pipe(
      map(response => response.products)
    )
  }

  //For individual routes / categories
  public getProductListByCategory(categoryId: string):Observable<Product[]>{
    //url based on the category
    const searchUrl = `${this.getProducts_baseUrl}/category/${categoryId}`

    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map(response=>response.products)
    )
  }

  //getting categories
  // public getProductCategories():Observable<ProductCategory[]>{
  //
  //   let dataCategories = this.httpClient.get(this.getCategories_URL)
  //  console.log(dataCategories)
  //
  //   //url is different
  //   return this.httpClient.get<GetResponseProductCategory>(this.getCategories_URL).pipe(
  //     map(response=>response.productCategory)
  //   )
  // }

  public getProductCategories(){
    return this.httpClient.get(this.getCategories_URL)
  }









}

//unwrap json
interface GetResponseProducts{
    products:Product[];
}

interface GetResponseProductCategory{

  productCategory:ProductCategory[];

}
