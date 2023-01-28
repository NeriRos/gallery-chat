import * as signalR from "@microsoft/signalr";

import { Observable, Subject } from "rxjs";

import { Chat } from "./chat/chat";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Message } from "./message/message";
import { User } from "./user";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
	private hubConnection?: signalR.HubConnection;
	private server = "http://localhost:5251";
	private $chat = new Subject<Message>();
	public isServerConnected = false;

	public get chatObservable(): Observable<Message> {
		return this.$chat.asObservable();
	}

	async createMessage(user: User, id: string, text: string) {
		try {
			if (this.hubConnection?.state === signalR.HubConnectionState.Connected) {
				await this.hubConnection?.send("newMessage", user, id, text);
			} else {
				alert("Not connected to chat");
			}

			return true;
		} catch (error) {
			console.log("Error sending message", error);
			return false;
		}
	}

	startConnection = async () => {
		this.hubConnection = new signalR.HubConnectionBuilder()
			.withUrl(`${this.server}/chat`)
			.build();

		try {
			await this.hubConnection.start();

			this.isServerConnected = true;

			console.log("Socket connection started");
		} catch (err) {
			return console.log(`Error while starting connection: ${err}`);
		}
	};

	addReceiveMessageListener = (id: string) => {
		if (this.hubConnection && id) {
			console.log("Chat connected");
			this.hubConnection.on(`new_message-${id}`, (message) => {
				this.$chat.next(message);
			});
		} else {
			console.log("NO MESSAGE LISTENER");
			alert("Could not receive messages");
		}
	};
}
