import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {DiveLogEntry} from './dive-log-entry';

@Injectable()
export class DiveLogApi {
  private _count = 0;
  private DIVE_LOG_API_URL = 
    'http://unraveling-ng.azurewebsites.net/api/backendtest/dives';

  constructor (private http: Http) {}

  getDives() {
    return this.http.get(this.DIVE_LOG_API_URL)
      .map(resp => {
        if (++this._count % 3 != 0) return resp;
        throw { message: 'Fake error' };
      })
      .map(resp => resp.json() || [])
      .catch(err => {
        let errMsg = (err.message) 
          ? err.message 
          : err.status ? `${err.status}: ${err.statusText}` : 'Server error';
        console.error(errMsg); 
        return Observable.throw(errMsg);
      })
  }
}