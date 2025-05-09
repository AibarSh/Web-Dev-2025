import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [NgFor],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      name: 'Yasin 43G11 109 см черный',
      description: 'Yasin TV' ,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/p74/19867464.jpg?format=preview-large',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/yasin-43g11-109-sm-chernyi-108494502/?c=750000000'

    },
    {
      name: 'Samsung UE43T5300AUXCE 109 см черный',
      description: 'Samsung TV',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h70/hca/63880820457502.jpg?format=gallery-medium',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm-chernyi-100182013/?c=750000000'
    },
    {
      name: 'LG 43LM5772PLA 109 см черный',
      description: 'LG TV',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6b/h88/64349678829598.jpg?format=gallery-medium',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/lg-43lm5772pla-109-sm-chernyi-101293496/?c=750000000'
    },
    {
      name: 'SMART 32E7000 81 см черный',
      description: 'Smart TV',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb0/pcf/7841522.jpeg?format=gallery-medium',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/smart-32e7000-81-sm-chernyi-129904216/?c=750000000'
    },
    {
      name: 'Xiaomi A 2025 L32M8-A2RU 81 см черный',
      description: 'Xiaomi TV',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he0/h82/86076931047454.png?format=gallery-medium',
      rating: 4.8 ,
      link: 'https://kaspi.kz/shop/p/xiaomi-a-2025-l32m8-a2ru-81-sm-chernyi-119660725/?c=750000000'
    },
    {
      name: 'Avalon 43D7000 109 см черный' ,
      description: 'Avalon TV',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc3/peb/9767098.jpg?format=gallery-medium',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/avalon-43d7000-109-sm-chernyi-114986390/?c=750000000'
    },
    {
      name: 'Яндекс YNDX-00074 109 см черный',
      description: 'Yandex TV' ,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pce/p75/25408526.jpg?format=gallery-medium',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/jandeks-yndx-00074-109-sm-chernyi-131892887/?c=750000000'
    },
    {
      name: 'TCL 55V6B 140 см черный',
      description: 'TCL TV',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p71/p80/23464421.png?format=gallery-medium',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/tcl-55v6b-140-sm-chernyi-124217778/?c=750000000'
    },
    {
      name: 'Haier 55 SMART TV S2 140 см черный' ,
      description: 'Haier TV',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3f/h75/86141611900958.png?format=gallery-medium',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/haier-55-smart-tv-s2-140-sm-chernyi-119871871/?c=750000000'
    },
    {
      name: 'ORBIS TVOR32FA11 81 см черный',
      description: 'Orbis TV',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pcb/pc2/4037282.png?format=gallery-medium',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/orbis-tvor32fa11-81-sm-chernyi-128765868/?c=750000000'
    }

  ];

  TelegramShare(productLink: string) {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(productLink)}`);
  }
}


