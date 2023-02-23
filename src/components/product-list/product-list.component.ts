import {Component, OnInit} from '@angular/core';
import {Product} from "../../common/product";
import {ProductService} from "../../services/product/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{


  products : Product[] = []
  currentCategoryId: string = '';

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit():void{
    this.listAllProducts();
    this.route.paramMap.subscribe(() =>{
      this.listProductsByCategory()
    })

  }


  listAllProducts(){
    //subscription to the Product service
    this.productService.getMainProductList().subscribe( //this calls for the execution of the getProductList observable in the Product service
      data => { //parse the response
        this.products = data;
      }
    )
  }





  listProductsByCategory(){

    //check if 'id' parameter is available
    //paramMap returns true or false
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id')

    if(hasCategoryId){
      //get the id from param string
      this.currentCategoryId = this.route.snapshot.paramMap.get('id')!
    } else {
      //not available
      this.currentCategoryId = '';
    }

    //get the products for the category we are pulling
    this.productService.getProductListByCategory(this.currentCategoryId).subscribe(data=>{
      this.products = data
    })
  }


}
