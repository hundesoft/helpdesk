import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { UserAccount } from '../Model/userAccount.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseURL = "http://localhost/HelpDesk-Backend/api/useraccount/"
  constructor(public httpClient: HttpClient) { }

  getAccount():Observable<UserAccount[]> {
    return this.httpClient.get<UserAccount[]>(this.baseURL+ 'getaccount.php')
    .pipe(
      
    )
  }
  
  // postAccount() {

  // }
  // updateAccount() {

  // }
  // deleteAccount() {

  // }
}
