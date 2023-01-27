import { Component, EventEmitter, Input, Output } from "@angular/core";

import { Chat } from "../chat/chat";
import { ChatService } from "../chat.service";
import { FormControl } from "@angular/forms";
import { Message } from "../message/message";

@Component({
  selector: 'app-message-creator',
  templateUrl: './message-creator.component.html',
  styleUrls: ['./message-creator.component.css']
})
export class MessageCreatorComponent {
	@Input() chat!: Chat;

	messageControl = new FormControl("");

	constructor(private chatService: ChatService) {}

	createMessage() {
		const text = this.messageControl.value;
		if (!text) {
			return alert("Type a message");
		}
		this.chatService.createMessage(text, this.chat.id);
	}
}
