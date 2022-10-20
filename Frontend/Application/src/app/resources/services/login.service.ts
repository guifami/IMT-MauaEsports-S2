import { RequestLogin } from '../models/Requests/RequestLogin';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseLogin } from '../models/Responses/ResponseLogin';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private baseURL!: string;

  constructor(private httpClient: HttpClient) {
    this.baseURL = 'https://mauaesportsapinewversion.herokuapp.com';
  }

  public submitLogin(requestLogin: RequestLogin): Observable<ResponseLogin> {
    return this.httpClient.post<ResponseLogin>(
      `${this.baseURL}/login`,
      requestLogin
    );
  }
  
}
