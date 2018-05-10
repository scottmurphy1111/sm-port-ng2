import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import { Content } from './interfaces/content';

@Injectable()
export class PortfolioService {
  
  private dataUrl = './data/data.json';
  //public data;
  constructor(private http: HttpClient) { }

  // getData(): Observable<any> {
  //   return this.http.get<any>(this.dataUrl)
  //     .do(data => console.log('All: ' +JSON.stringify(data)))
  //     .catch(this.handleError);
  // }

  getData(): Observable<Content[]> {
    return this.http.get(this.dataUrl)
      .do(data => JSON.stringify(data))
      .catch(this.handleError);
  }


  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
