import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpParams, HttpEventType } from '@angular/common/http';

import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let clonedRequest;
    if (req.url.includes('books')) {
      clonedRequest = req.clone({
        params: new HttpParams()
          .set('start_time', Date.now().toString())
      });
    } else {
      clonedRequest = req;
    }

    return next.handle(clonedRequest).pipe(
      filter((event: HttpEvent<any>) => event.type === HttpEventType.Response),
      map((event: HttpResponse<any>) => {
        if (event.url.includes('books')) {
          const time = Date.now() - parseInt(clonedRequest.params.get('start_time'), 10);
          console.log(`${event.url} took ${time} ms`);
        }
        return event;
      })
    );

  }
}
