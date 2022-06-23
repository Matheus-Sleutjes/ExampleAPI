import { LoginModel } from './../models/login-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  controller = "Login"
  ENDPOINT = `${environment.urlApi}${this.controller}`

  constructor(private http: HttpClient) { }

  login(login: LoginModel): Observable<boolean>{
    let variavel = this.http.post<boolean>(this.ENDPOINT, login);
    console.log("service", variavel)
    return variavel;
  }
}
