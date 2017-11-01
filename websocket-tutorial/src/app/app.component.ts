import { Component } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { ChatService } from './chat.service';
import * as Rx from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WebsocketService, ChatService ]
})
export class AppComponent {
  title = "Mahathi chat service";
  
  // I can subscribe to a subject
  constructor(private chatService: ChatService){
    chatService.messages.subscribe(msg => {
      console.log("Response from websocket: " , msg);
    });
  }

  // constructor(private wsService: WebsocketService){
  //   this.socky = wsService.connect('ws://localhost:1235/websocket')
  //   this.socky.subscribe(msg => {
  //       console.log("Response from websocket: " + msg);
  //     })
  // }

  private message = {
    author: 'tutorialedge',
    message: 'this is a test message',
  }

  sendMsg() {
    

    // I can use methods from the subjects' observer. (That have to check some
    // state of the subject before they send.)

    this.chatService.messages.next(this.message);
    console.log('new message from client to websocket: ', this.message);
    // this.message.message = ''; // why?
  }
}
