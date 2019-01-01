import { Component } from '@angular/core';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'inventory-app';

  products: Product[];

  constructor() {
    
    this.products = [
      new Product(
        'NICEHAT',                                // sku
        'A Nice Black Hat',                       // name
        '/assets/images/products/black-hat.jpg',  // imageUrl
        ['Men', 'Accessories', 'Hats'],           // department
        29.99),                                   // price   
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/assets/images/products/blue-jacket.jpg',
         ['Women', 'Apparel', 'Jackets & Vests'],
         29.99)        
      ];
  }

  productWasSelected(product: Product): void {
    console.log('Product selected: ', product);
  }
 
}
