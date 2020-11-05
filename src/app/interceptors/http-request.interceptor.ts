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
    if (request.url.includes('signhost')) {
      const authReq = request.clone({
        headers: request.headers.set(this.evidosApplicationKey, this.evidosApplicationValue)
          .set(this.evidosAuthKey, this.evidosAuthValue)
          .set('Access-Control-Allow-Origin', '*')
          .set('Accept', 'application/vnd.signhost.v1+json')
      });
      console.log(authReq);
      return next.handle(authReq);
    }
    return next.handle(request);
  }
}
