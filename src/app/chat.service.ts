import { Injectable } from "@angular/core";
import { Message } from "./message/message";
import { SampleChat } from "./chat/chat";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
	constructor() {}

	createMessage(text: string, chatId: string) {

  }

	getMessages(chatId: string) {
		return SampleChat.messages;
	}

	getChatByImageId(imageId: string) {
		return SampleChat;
	}
}
