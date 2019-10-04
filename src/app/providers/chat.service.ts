import { Injectable } from '@angular/core';
import { PusherService } from './pusher.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as CONST from '../model/constants';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private _url = CONST.URL;
  private _channel: any;

  constructor(
    public http: HttpClient,
    private _pusher: PusherService
  ) { }

  sendMessage(message: string): Observable<any> {
    let url = this._url + "/message";
    const param = {
      type: 'human',
      message,
    };
    return this.http.post(url, param)
  }
  getChannel() {
    return this._channel;
  }
}
