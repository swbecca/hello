import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from 'rxjs/operators';
import { mergeMap } from 'rxjs/operators';
import { CookieService } from './cookie.service';
import { Router } from '@angular/router';
import { dataHttpService } from './data-http.service';
import { NzModalService } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class HlmsInterceptorService implements HttpInterceptor {

  constructor(
    private CookieService: CookieService,private router: Router,
    private datahttpService: dataHttpService,
    private modalService: NzModalService,
  ) { }

  indexKeep: any = 0;
  keepaliveTime: any = 0;
  service:any = this.datahttpService.getAllDataService();
  keepaliveTimeout: any = "";
  index: any = 0;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let th = this;
    // let tenantId = this.CookieService.getCookie('tenantId');
    const authReq = req.clone({
      url: (req.url)  //对任意请求的url添加token参数
    });
    this.keepalive();
    return next.handle(authReq).pipe(mergeMap((event: any) => {
      if (event instanceof HttpResponse && event.status != 200) {
        return of(event);
      }
      if (event instanceof HttpResponse && event.body && (event.body.errcode == '200100' || event.body.errcode == '200101')) {
        console.log(event);
        if (req.url.indexOf('hlms/api/tenant/authentication/keepalive') == -1) {
          return of(event);
        }
      }
      return Observable.create(observer => observer.next(event)); //请求成功返回响应
    }),
      catchError(( res: HttpResponse<any> | HttpErrorResponse,): Observable<any>  => { //请求失败处理
        switch (res.status) {
          case 401:
            break;
          case 200:
            break;
          case 304:
            break;
          case 404:
            break;
          case 403:
            break;
          case 500:
          break;
        }
        return of(event);
      }));
  }

  openErrorMode() {
    let th = this;
    th.index++;
    if (th.index > 1) {
      return;
    }
    let code = th.CookieService.getCookie('code');
    setTimeout(function () {
      th.modalService.info({
        nzTitle: '用户信息丢失，请重新登录',
        nzContent: '<b></b>',
        nzMaskClosable: false,
        nzOnOk() {
          th.index = 0;
          window.location.href = '/login/' + code;
        }
      });
    }, 500)

  }

  keepalive() {
    let th = this;
    if (th.keepaliveTime !== 0) {
      return;
    }
    th.keepaliveTime = 5;
    let headers = new HttpHeaders().set('Authorization', th.CookieService.getCookie('token'));
    let header = {
     headers:headers
    };
    th.service.keepalive({},header).subscribe((data: any) => {
      th.setKeepLiveTime();
      if (data.errcode == '0') {
        th.indexKeep = 0;
      } else {
        th.indexKeep ++;
        if(th.indexKeep > 1){
          return;
        }
        th.modalService.info({
          nzTitle: data.errmsg,
          nzContent: '<b></b>',
          nzMaskClosable: false,
          nzOnOk() {
            th.indexKeep = 0;
            th.keepaliveTime = 0;
            if (th.keepaliveTimeout) {
              clearTimeout(th.keepaliveTimeout);
            }
            let code = th.CookieService.getCookie('code');
            window.location.href = '/login/' + code;
          }
        });
      }
    }, (error: any) => {
      console.log(error);
    })
  }

  setKeepLiveTime() {
    let th = this;
    if (th.keepaliveTime === 0) return;
    th.keepaliveTimeout = setTimeout(() => {
      th.keepaliveTime--;
      th.setKeepLiveTime();
    }, 1000);
  }
}
