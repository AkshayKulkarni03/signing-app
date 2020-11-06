import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TransactionOverviewRequest } from '../model/signer-transaction-overview.model';
import { environment } from './../../environments/environment';
import { handleError } from './../model/handle-error';
import { Transaction, SigerDetails } from '../model/signer-transaction-overview.model';

@Injectable({
  providedIn: 'root'
})
export class SigningTransactionService {

  apiBaseUrl = environment.apiBaseUrl;

  httpOptionsJson = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  httpOptionsMultipart = {
    headers: new HttpHeaders({ 'Content-Type': undefined })
  };

  constructor(private readonly http: HttpClient) { }

  createTransaction(request: TransactionOverviewRequest): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.apiBaseUrl}transaction`, request, this.httpOptionsJson).pipe(
      catchError(handleError<Transaction>('create Transaction', new Transaction()))
    );
  }

  sendFileForSigning(id: string, fileName: string, file: File): Observable<void> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.put<any>(`${this.apiBaseUrl}transaction/${id}/file/${fileName}`, formData).pipe(
      catchError(handleError<any>('send file for signing to Transaction', id))
    );
  }

  startSigningTransaction(id: string): Observable<any> {
    return this.http.put(`${this.apiBaseUrl}transaction/${id}/start`, null).pipe(
      catchError(handleError<any>('Start signing Transaction', id))
    );
  }

  getTransaction(id: string): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.apiBaseUrl}transaction/${id}`).pipe(
      catchError(handleError<Transaction>('get Transaction', new Transaction()))
    );
  }

  getSignedDocument(id: string, documentName: string): Observable<Blob> {
    return this.http.get<Blob>(`${this.apiBaseUrl}transaction/${id}/file/${documentName}`,{responseType: 'blob' as 'json'}).pipe(
      map(blob => new Blob([blob], { type: 'application/pdf' })),
      catchError(handleError<Blob>('get signed document', null))
    );
  }

  saveSignRequest(signerDetails: SigerDetails): Observable<void> {
    console.log('triggered');
    return this.http.post(`${this.apiBaseUrl}signer`, signerDetails, this.httpOptionsJson).pipe(
      catchError(handleError<any>('save signer details', []))
    );
  }

  getAllSigningRequests(): Observable<SigerDetails[]> {
    return this.http.get<SigerDetails[]>(`${this.apiBaseUrl}signer`);
  }
}
