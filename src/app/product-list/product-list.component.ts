import { Component, EventEmitter,Input, Output } from '@angular/core';
import { Product } from '../invent/product.model';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() productList! : Product[];
  @Output() onProductSelected: EventEmitter<Product>;
private currentProduct! : Product;
  constructor(){
    //this.productList = new Product('ahks'),
    this.onProductSelected = new EventEmitter()
    //this.currentProduct = product
  }

clicked(product:Product) :void {
this.currentProduct = product
this.onProductSelected.emit(product)
}

isSelected(product: Product): boolean {
   if (!product || !this.currentProduct) {
   return false;
   }
   return product.sku === this.currentProduct.sku;
   }
  
}
