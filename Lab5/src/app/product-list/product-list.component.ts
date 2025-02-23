import { Component, OnInit } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  imports: [ProductItemComponent]
})
export class ProductListComponent implements OnInit {
  selectedCategory = 'All';

  ngOnInit(): void {
    this.filterProducts('All');
  }

  filterProducts(category: string): void {
    this.selectedCategory = category;
  }
}