import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SigningOverviewRequest } from '../model/signing-overview';
import { environment } from './../../environments/environment';
import { handleError } from './../model/handle-error';
import { SigningOverview } from './../model/signing-overview';

@Injectable({
  providedIn: 'root'
})
export class SigningTransactionService {

  evidosUrl = environment.evidosBaseUrl;

  httpOptionsJson = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  httpOptionsPdf = {
    headers: new HttpHeaders({ 'Content-Type': 'application/pdf' })
  };

  constructor(private readonly http: HttpClient) { }

  createTransaction(request: SigningOverviewRequest): Observable<SigningOverview> {
    return this.http.post<SigningOverview>(this.evidosUrl, request, this.httpOptionsJson).pipe(
      catchError(handleError<SigningOverview>('create Transaction', new SigningOverview()))
    );
  }

  sendFileForSigning(id: string, fileName: string, file: any): Observable<any> {
    return this.http.put<any>(`${this.evidosUrl}${id}/${fileName}`, file);
  }

  startSigningTransaction(id: string): Observable<any> {
    return this.http.put(`${this.evidosUrl}${id}/start`, null);
  }

  getTransaction(id: string): Observable<SigningOverview> {
    return this.http.get<SigningOverview>(`${this.evidosUrl}${id}`);
  }

  getSignedDocument(id: string, documentName: string): Observable<any> {
    return this.http.get<any>(`${this.evidosUrl}${id}/${documentName}`);
  }
}
