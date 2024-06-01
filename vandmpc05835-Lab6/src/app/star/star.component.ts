import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Iproduct } from '../Iproduct';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClinked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.rating = 0;
    this.starWidth = this.rating*75/5;
  }

  ngOnChanges(): void {
    this.starWidth = this.rating*75/5;
  }

  onClick():void{
    this.ratingClinked.emit(`Đánh giá sản phẩm là ${this.rating} sao `) ;
  }

  ngOnInit(): void {
  }
  products: Iproduct[] =[
  
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/27452/leaf-rake-clipart-md.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "April 15, 2017",
      "description": "Garden cart with 4 wheels and 300-pound capacity.",
      "price": 49.95,
      "starRating": 4.5,
      "imageUrl": "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/27452/leaf-rake-clipart-md.png"
    },
    {
      "productId": 3,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2018",
      "description": "Hammer with 16-inch handle and 22-ounce head.",
      "price": 9.95,
      "starRating": 4.8,
      "imageUrl": "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/27452/leaf-rake-clipart-md.png"
    },
    {
      "productId": 4,
      "productName": "Tape Measure",
      "productCode": "TBX-0052",
      "releaseDate": "June 30, 2019",
      "description": "Tape measure with 25-foot length and fractional readings.",
      "price": 4.95,
      "starRating": 2,
      "imageUrl": "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/27452/leaf-rake-clipart-md.png"
    },
    {
      "productId": 5,
      "productName": "Lawn Mower",
      "productCode": "GDN-0055",
      "releaseDate": "July 15, 2020",
      "description": "Lawn mower with 20-inch cutting width and 150cc engine.",
      "price": 149.95,
      "starRating": 4.0,
      "imageUrl": "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/27452/leaf-rake-clipart-md.png"
    },
    {
      "productId": 6,
      "productName": "Hedge Trimmer",
      "productCode": "GDN-0060",
      "releaseDate": "August 20, 2020",
      "description": "Hedge trimmer with 24-inch cutting length and 40-volt battery.",
      "price": 79.95,
      "starRating": 4.6,
      "imageUrl": "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/27452/leaf-rake-clipart-md.png"
    },
    {
      "productId": 7,
      "productName": "Pest Control",
      "productCode": "GDN-0065",
      "releaseDate": "September 10, 2020",
      "description": "Pest control with 10 traps and non-toxic bait.",
      "price": 29.95,
      "starRating": 4.1,
      "imageUrl": "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/27452/leaf-rake-clipart-md.png"
    },
    {
      "productId": 8,
      "productName": "Fertilizer",
      "productCode": "GDN-0070",
      "releaseDate": "October 15, 2020",
      "description": "Fertilizer with 10-10-10 NPK formula and 20-pound bag.",
      "price": 39.95,
      "starRating": 4.4,
      "imageUrl": "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/27452/leaf-rake-clipart-md.png"
    },
    {
      "productId": 9,
      "productName": "Pruning Saw",
      "productCode": "TBX-0075",
      "releaseDate": "November 20, 2020",
      "description": "Pruning saw with 6-inch blade and ergonomic handle.",
      "price": 14.95,
      "starRating": 4.7,
      "imageUrl": "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/27452/leaf-rake-clipart-md.png"
    }
  
];

}
