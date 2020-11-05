import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigningTransactionService {

  constructor(private readonly http: HttpClient) { }

  createTransaction(data: any): Observable<any> {
    return this.http.post('', data);
  }
}
