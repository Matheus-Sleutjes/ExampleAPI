import { LoginModel } from './../models/login-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  controller = "Login"
  ENDPOINT = `${environment.urlApi}${this.controller}`

  constructor(private http: HttpClient) { }

  login(login: LoginModel) {
    let variavel = this.http.post<any>(this.ENDPOINT, login);
    return variavel;
  }
}
