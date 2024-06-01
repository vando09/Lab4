import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iunit } from 'app/unit/unit.component';
import { Observable } from 'rxjs';
export class UnitInfoModel {
  id: string;
  name: string;
  address: string;
  description: string;
  created_at: string;
  updated_at: string;
}
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }
  post: Iunit;
  onCreatePost(Data: Iunit) {
    this.http.post("https://knowledgehub.demopolyct.online/api/unit", Data).subscribe(p => {
      console.log(p);
    })
  }
  addPost() {
    this.onCreatePost(this.post);
    this.getAllUnit();
  }
  storePost(Data: Iunit) {
    this.http.post('https://knowledgehub.demopolyct.online/api/unit', Data).subscribe(p => {
      console.log(p);
    })
  }
  getAllUnit(): Observable<any> {
    return this.http.get('https://knowledgehub.demopolyct.online/api/unit')
  };
  postUnit(data: Iunit): Observable<any> {
    return this.http.post('https://knowledgehub.demopolyct.online/api/unit', {
      name: data.name,
      address: data.address,
      description: data.description
    });
  }


  getUnitById(id: number): Observable<any> {
    return this.http.get('https://knowledgehub.demopolyct.online/api/unit/' + id)

  }

  putUnit(data: Iunit, id: number): Observable<any> {
    return this.http.put('https://knowledgehub.demopolyct.online/api/unit' + id, {
      name: data.name,
      address: data.address,
      description: data.description
    })
  }

  delete(id: number): Observable<any> {
    return this.http.delete('https://knowledgehub.demopolyct.online/api/unit/' + id)


  }
}
