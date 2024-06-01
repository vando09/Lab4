import { Component, OnInit } from '@angular/core';
import { PostService } from 'app/@core/services/api/post.service';
import { Observable, Observer } from 'rxjs';
export interface Iunit {
  id: string;
  name: string;
  address: string;
  description: string;
  created_at: string;
  updated_at: string;

}

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent implements OnInit {
  listUnit: Iunit[] = [];
  constructor(private unit: PostService) {

  }

  ngOnInit(): void {
    this.getUnit();

  }
  getUnit() {
    this.unit.getAllUnit().subscribe(res => {
      console.log(res);
      this.listUnit = res.data;
    }, error => {
      console.error(error);
    });
  }

  // addUnit(){
  //   this.unit.storePost(this.unit);
  //   }
    

    onDelete(id:number){
    this.unit.delete(id).subscribe(p=>{
    console.log(p);
    this.unit.getAllUnit();
    })
    }


}
