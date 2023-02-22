import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private BASE_URL = 'http://127.0.0.1:5001/'
  constructor(private http:HttpClient) { }

  getAccount(numberAccount:any, password:any):Observable<any>{
    return this.http.post(`${this.BASE_URL}`, {"number_account": numberAccount, "password": password})
  }

  createAccount(nameClient:any, password:any):Observable<any>{
    return this.http.post(`${this.BASE_URL + 'crear'}`, {"client_name": nameClient, "password": password})
  }

  consignAccount(numberAccount:any, value:any):Observable<any>{
    return this.http.post(`${this.BASE_URL + 'consignar'}`, {"number_account":numberAccount, "value":value})
  }

  withdrawAccount(numberAccount:any, password:any, value:any):Observable<any>{
    return this.http.post(`${this.BASE_URL + 'retirar'}`, {"number_account": numberAccount, "password": password, "value":value})
  }
}
