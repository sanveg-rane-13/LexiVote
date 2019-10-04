import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as CONST from '../model/constants';

declare const Pusher: any;
@Injectable({
  providedIn: 'root'
})
export class PusherService {

  public _pusher: any;

  constructor(public http: HttpClient) {
    this.initializePusher();
  };

  initializePusher() {
    this._pusher = new Pusher({
      cluster: CONST.PUSHER_CST,
      key: CONST.PUSHER_KEY,
      appId: CONST.PUSHER_APP_ID,
      secret: CONST.PUSHER_SECRET,
      encrypted: true
    });
  }

  getPusher() {
    return this._pusher;
  };
}
