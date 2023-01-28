import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { User, getUser } from "../user";

import { ChatService } from "../chat.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-message-creator',
  templateUrl: './message-creator.component.html',
  styleUrls: ['./message-creator.component.css']
})
export class MessageCreatorComponent implements OnInit {
	@Input() chatId!: string;
	user: User = getUser();
	messageControl = new FormControl("");
	connected = false;

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
			this.user,
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
