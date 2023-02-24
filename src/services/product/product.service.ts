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
    //console.log(searchUrl)


    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map(response=>response.products)
    )
  }



  //get categories from json
  public getProductCategories(){
    return this.httpClient.get(this.getCategories_URL)
  }


  public searchProducts(searchKeyword: string): Observable<Product[]>{
    //url based on the keyword
    const searchUrl = `${this.getProducts_baseUrl}/search?q=${searchKeyword}`
    console.log(`search with keyword url being passed to the rest-api = ${searchUrl} `)

    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map(response=>response.products)
    )
  }







}

//unwrap json
interface GetResponseProducts{
    products:Product[];
}

interface GetResponseProductCategory{

  productCategory:ProductCategory[];

}
