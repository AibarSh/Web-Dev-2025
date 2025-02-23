import { Component, Input, OnInit } from '@angular/core';
import { products } from '../products/products.component';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
  imports: [NgFor]
})
export class ProductItemComponent implements OnInit {
  @Input() category: string = 'All';
  products = products;
  filteredProducts = products;

  ngOnInit(): void {
    this.filterProducts();
  }

  ngOnChanges(): void {
    this.filterProducts();
  }

  filterProducts(): void {
    if (this.category === 'All') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product => product.category === this.category);
    }
  }

  TelegramShare(productLink: string) {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(productLink)}`);
  }

  likeProduct(product: any) {
    if (!product.likes) {
      product.likes = 0;
    }
    if (product.isLiked) {
      product.likes--;
      product.isLiked = false;
    } else {
      product.likes++;
      product.isLiked = true;
    }
    this.saveLikes();
  }

  saveLikes() {
    const likes = this.products.map(product => ({
      id: product.id,
      likes: product.likes,
      isLiked: product.isLiked
    }));
    localStorage.setItem('productLikes', JSON.stringify(likes));
  }

  loadLikes() {
    const likes = JSON.parse(localStorage.getItem('productLikes') || '[]');
    likes.forEach((like: any) => {
      const product = this.products.find(p => p.id === like.id);
      if (product) {
        product.likes = like.likes;
        product.isLiked = like.isLiked;
      }
    });
  }
}