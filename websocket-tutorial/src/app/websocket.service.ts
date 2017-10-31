import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';

@Injectable()
// A service that creates a subject: observer and observable for a websocket.
export class WebsocketService {
    constructor() { }

	private subject: Rx.Subject<MessageEvent>;
	// A subject is an observer and an observable together.
	
	public connect(url): Rx.Subject<MessageEvent> {
		if (!this.subject){
			this.subject = this.create(url);
			console.log("Successfully connected: " + url);
		}
		return this.subject;
	}

	private create(url): Rx.Subject<MessageEvent> {
		let ws = new WebSocket(url);

		let observable = Rx.Observable.create(
			(obs: Rx.Observer<MessageEvent>) => {
				ws.onmessage = obs.next.bind(obs);
				ws.onerror = obs.error.bind(obs);
				ws.onclose = obs.complete.bind(obs);
				return ws.close.bind(ws);
			}
			// This is essentially like the .do function.
			// It tells you what method of the observer to call when what event happens in the observable.
			// So when you get message -> call obs.next
			// When you get error in the socket -> call obs.error
			// When connection closes -> call obs.complete
			// It returns ws.close? Idk why it does this.
		)

		let observer = {
			next: (data: Object) => {
				if (ws.readyState === WebSocket.OPEN) {
					ws.send(JSON.stringify(data));
				}
			}
			// Another way of saying var next = function(data){}
		}
		return Rx.Subject.create(observer, observable);
	}


}
