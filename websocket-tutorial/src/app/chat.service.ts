import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs/Rx';
import {WebsocketService} from './websocket.service';

const CHAT_URL = 'ws://localhost:1235/websocket';

export interface Message{
	author: string,
	message: string
}

@Injectable()
// A service that uses the webSocket service to create a better subject "messages" with better formatted data
export class ChatService {
	public messages: Subject<Message>;
	//public messages: string;

	// Magically creates an instance of wsService for us to use :D
	constructor(wsService: WebsocketService) {
		this.messages = <Subject<Message>>wsService 
			.connect(CHAT_URL)
			.map((response: MessageEvent): Message =>{
				let data = JSON.parse(response.data);
				return {
					author: data.author,
					message: data.message
				}
			});

	// My attempt
	// constructor(wsService: WebsocketService){
	// 	this.messages = <string>wsService
	// 		.connect(CHAT_URL)
	// 		.map(response: MessageEvent): Message =>{
	// 			return data;
	// 		}

	// }
		
		// .connect connects of wsService takes in a url and returns a subject (a socket observable and observer)
		// The subject here could be considered the observable, the data stream.
		// .map takes every response string and parses to a json object.
		// We take the author and the message from the json object
		// This gets us a stream of [{author: au, message: me}, {author:au, message: me} ...]
		// Notice I've created here a nice observable for myself.
		// I can also use the observer functions.
	}
}

