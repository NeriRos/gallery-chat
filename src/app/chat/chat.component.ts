import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";

import { Chat } from "./chat";
import { ChatService } from "../chat.service";
import { GalleryItem } from "../gallery-item/gallery-item";
import { Message } from "../message/message";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
	@Input() galleryItemId!: string;
	chat!: Chat;

	$messages?: Subscription;
	$chat?: Subscription;

	constructor(public chatService: ChatService) {}

	updateChat(message: Message) {
		this.chat.messages.push(message);
	}

	async initiateChat() {
		this.chat = {
			id: this.galleryItemId,
			messages: [],
		};

		try {
			await this.chatService.startConnection(this.chat.id);
			this.chatService.addReceiveMessageListener();
			this.chatService.chatObservable.subscribe(
				(chat) =>
					(this.chat = {
						...chat,
						id: chat.id || this.galleryItemId,
						messages: chat.messages || [],
					}),
			);
			this.$messages = this.chatService.messagesObservable.subscribe(
				(value) => {
					this.updateChat(value);
				},
			);
		} catch (error) {
			console.log("Error connecting to hub", error);
		}
	}

	ngOnInit(): void {
		this.initiateChat();
	}

	ngOnDestroy(): void {
		this.$messages?.unsubscribe();
		this.$chat?.unsubscribe();
	}
}
