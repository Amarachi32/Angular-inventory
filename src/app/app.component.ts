import { Component } from '@angular/core';
import { Product } from './invent/product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'invent';
products : Product[]
constructor(){
  let newProduct = [new Product(
    "NICEHAT", // sku
    "A Nice Black Hat", // name
    "/assets/images/products/black-hat.jpg", // imageUrl
    ["Men", "Accessories", "Hats"], // department
    29.99
    ), 
    new Product(
      "Amarachi", // sku
      "A software engineer", // name
      "/assets/images/products/black-hat.jpg", // imageUrl
      ["Men", "Accessories", "Hats"], // department
      29.99
      )];
    this.products = newProduct;
}

productWasSelected(product: Product): void {
   console.log('Product clicked: ', product);
   }
  

}
