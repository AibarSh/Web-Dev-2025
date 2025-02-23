import { Component } from '@angular/core';
import { products } from './products/products.component';
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductItemComponent } from "./product-item/product-item.component";


@Component({
  selector: 'app-root',  
  standalone: true,
  imports: [ ProductListComponent, ProductItemComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online_shop';
}
