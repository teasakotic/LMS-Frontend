import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginServiceService } from './services/login-service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private login: LoginServiceService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let newReq = request.clone({
      headers: request.headers.set('Authorization', this.login.getToken()),
    });

    return next.handle(newReq);
  }
}
