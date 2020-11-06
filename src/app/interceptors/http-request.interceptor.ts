import {
  HttpEvent, HttpHandler,

  HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  evidosApplicationKey = environment.evidosApplicationKey;
  evidosApplicationValue = environment.evidosApplicationValue;
  evidosAuthKey = environment.evidosAuthKey;
  evidosAuthValue = environment.evidosAuthValue;

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request);
  }
}
