import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { TestUser, User } from "../user";

import { Chat } from "../chat/chat";
import { ChatService } from "../chat.service";
import { FormControl } from "@angular/forms";
import { Message } from "../message/message";

@Component({
  selector: 'app-message-creator',
  templateUrl: './message-creator.component.html',
  styleUrls: ['./message-creator.component.css']
})
export class MessageCreatorComponent implements OnInit {
	@Input() chatId!: string;
	user: User = TestUser;

	messageControl = new FormControl("");

	constructor(private chatService: ChatService) {}
	ngOnInit(): void {
		console.log(this.chatId);
	}

	async createMessage() {
		const text = this.messageControl.value;
		if (!text) {
			return alert("Type a message");
		}
		const isOk = await this.chatService.createMessage(
			this.user.username,
			this.chatId,
			text,
		);
		if (isOk) {
			this.messageControl.setValue("");
		} else {
			alert("There was a problem with sending the message");
		}
	}
}
