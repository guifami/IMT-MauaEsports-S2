import { RequestLogin } from '../models/Requests/RequestLogin';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseLogin } from '../models/Responses/ResponseLogin';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  public username?: string;
  public isLogged!: boolean;
  private baseURL!: string;

  constructor(private httpClient: HttpClient) {
    this.baseURL = 'https://mauaesportsapiusuario.herokuapp.com';
  }

  public submitLogin(requestLogin: RequestLogin): Observable<ResponseLogin> {
    this.username = requestLogin.login;
    return this.httpClient.post<ResponseLogin>(
      `${this.baseURL}/login`,
      requestLogin,
    );
  }
}
