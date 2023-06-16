import { HttpHeaders, HttpParams } from '@angular/common/http';

export abstract class ServiceBase {

  protected getHeaderJson() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
  protected getHeaderJsonWithParams(param: HttpParams) {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: param
    };
  }

  protected getHeaderDeleteJson(obj: Object) {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: obj
    };
  }

  protected getHeaderFormData() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data'
      })
    };
  }

  protected getHeaderJsonBlob() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    const httpOptions: Object = {
      headers: headers,
      observe: 'response',
      responseType: 'blob',
    }
    return httpOptions
  }
  protected getHeaderJsonTokenWithResponse(responsetype: any) {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.getUserToken()
      }),
      responseType: responsetype
    };
  }

  protected getHeaderBlobToken() {

    return new HttpHeaders({

      observe: 'response',
      responseType: 'blob',
    });
  }

  public getUserToken(): string {
    const token = localStorage.getItem('token');
    if (token !== null) {
      return token.replace('"', '');
    }
    return ''
  }
}
