import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { RequestRegister } from '../models/RequestRegister';
import { ResponseRegister } from '../models/ResponseRegister';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseURL!: string;

  constructor(private httpClient: HttpClient) {
    this.baseURL = 'https://mauaesportsapinewversion.herokuapp.com';
  }

  public submitRegister(requestRegister: RequestRegister): Observable<ResponseRegister> {
    return this.httpClient.post<ResponseRegister>(
      `${this.baseURL}/cadastro`,
      requestRegister
    );
  }

}
