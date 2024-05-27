import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ilogin } from 'app/Ilogin';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginForm!: Ilogin;
  constructor(
    private _http: HttpClient
  ) { }
  login(data: Ilogin): Observable<any> {
    return this._http.post('https://knowledgehub.demopolyct.online/api/auth/login', {
      email: data.email,
      password: data.password

    });
  }
}
