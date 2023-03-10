import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ProductListComponent} from "../components/product-list/product-list.component";
import {HttpClientModule} from "@angular/common/http";
import {ProductService} from "../services/product/product.service";
import {RouterModule, Routes} from "@angular/router";
import {ProductCategoryMenuComponent} from "../components/product-category-menu/product-category-menu.component";
import {SearchComponent} from "../components/search/search.component";
import {ProductDetailsComponent} from "../components/product-details/product-details.component";
import {CartStatusComponent} from "../components/cart-status/cart-status.component";
import {CartDetailsComponent} from "../components/cart-details/cart-details.component";
import {CheckoutComponent} from "../components/checkout/checkout.component";
import {ReactiveFormsModule} from "@angular/forms";
import {OrderConfirmationComponent} from "../components/order-confirmation/order-confirmation.component";
import {CheckoutService} from "../services/checkout/checkout.service";



const routes: Routes = [
  {path: 'order-confirmation', component:OrderConfirmationComponent},
  {path: 'cart-details', component:CartDetailsComponent},
  {path: 'checkout', component:CheckoutComponent},
  {path: 'products/:id', component:ProductDetailsComponent},
  {path: 'search/:keyword', component:ProductListComponent},
  {path: 'category/:id', component: ProductListComponent},
  {path: 'category', component: ProductListComponent},
  {path: 'products', component: ProductListComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: '**', redirectTo: '/products', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    OrderConfirmationComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductService, CheckoutComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
