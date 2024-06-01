import { Component } from '@angular/core';
import { Ihome } from 'app/Ihome';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 home: Ihome[]=[
  { 
    "homeName": "Leaf Rake",
    "imageUrl": "https://www.uplevo.com/img/designbox/thiet-ke-banner-anh-quang-cao.png"
 
  }
 ]
}
