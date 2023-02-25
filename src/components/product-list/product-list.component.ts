import {Component, OnInit} from '@angular/core';
import {Product} from "../../common/product/product";
import {ProductService} from "../../services/product/product.service";
import {ActivatedRoute} from "@angular/router";
import {CartItem} from "../../common/cart-item/cart-item";
import {CartService} from "../../services/cart/cart.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{


  products : Product[] = []
  currentCategoryId: string = '';



  constructor(private productService: ProductService, private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit():void{
    this.handleSearchProducts()
    this.listAllProducts();

    this.route.paramMap.subscribe(() =>{
      this.listProductsByCategory()
    })

  }






  //List all the products
  listAllProducts(){
    //subscription to the Product service
    this.productService.getMainProductList().subscribe( //this calls for the execution of the getProductList observable in the Product service
      data => { //parse the response
        this.products = data;
      }
    )
  }


  //List products by category
  listProductsByCategory(){

    //check if 'id' parameter is available
    //paramMap returns true or false
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id')

    if(hasCategoryId){
      //get the id from param string
      this.currentCategoryId = this.route.snapshot.paramMap.get('id')!
     }
    else {
      //not available
      this.currentCategoryId = 'groceries';
    }

    //get the products for the category we are pulling
    this.productService.getProductListByCategory(this.currentCategoryId).subscribe(data=>{
      this.products = data
    })
  }


  //search products using keywords
  handleSearchProducts(){
    const searchKeyword: string = this.route.snapshot.paramMap.get('keyword')!;
    console.log(`keyword into handlesearchProducts = ${searchKeyword}`)

    //search for the products using the keyword
    this.productService.searchProducts(searchKeyword).subscribe(data=>{
      this.products = data;
      console.log(`receiving data from service searching by keyword = ${this.products}`)
    })
  }

  addToCart(product: Product){
    console.log(`Product name: ${product.title}, Product price: ${product.price}`)

    //create a cart item
    const cartItem = new CartItem(product);
    //
    this.cartService.addToCart(cartItem);


  }






}
