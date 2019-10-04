import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PusherService } from '../providers/pusher.service';
import { ChatService } from '../providers/chat.service';

import { Chat } from '../model/chatModel';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  chats: Chat[] = [];
  message: string;
  sending: boolean;

  constructor(
    // public navCtrl: NavController,
    public navParams: NavParams,
    private _chat: ChatService) { }

  ionViewDidLoad() {
    // subscribe to pusher's event
    this._chat.getChannel().bind('chat', data => {
      if (data.type !== 'bot') {
        data.isMe = true;
      };
      this.chats.push(data);
    });
  }

  sendMessage() {
    this.sending = true;
    this._chat.sendMessage(this.message)
      .subscribe(resp => {
        this.message = '';
        this.sending = false;
      }, err => {
        this.sending = false;
      });
  }

}
