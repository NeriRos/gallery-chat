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
	private $messages = new Subject<Message>();
	private $chat = new Subject<Chat>();
	public isServerConnected = false;
	public chat?: Chat;

	public get messagesObservable(): Observable<Message> {
		return this.$messages.asObservable();
	}

	public get chatObservable(): Observable<Chat> {
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

	startConnection = async (id: string) => {
		this.hubConnection = new signalR.HubConnectionBuilder()
			.withUrl(`${this.server}/chat`)
			.build();

		try {
			await this.hubConnection.start();

			this.isServerConnected = true;
			this.addInitListener();

			await this.hubConnection?.send("init", id);

			console.log("Socket connection started");
		} catch (err) {
			return console.log(`Error while starting connection: ${err}`);
		}
	};

	addInitListener = () => {
		if (this.hubConnection && this.isServerConnected) {
			this.hubConnection.on("init", (chat) => {
				this.$chat.next(chat);
			});
		} else {
			alert("Could not init chat");
		}
	};

	addReceiveMessageListener = () => {
		if (this.hubConnection && this.isServerConnected) {
			this.hubConnection.on("newMessage", (message) => {
				this.$messages.next(message);
			});
		} else {
			alert("Could not receive messages");
		}
	};
}
