import { Chat, SampleChat } from "./chat";
import { Component, Input, OnInit } from "@angular/core";

import { ChatService } from "../chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
	@Input() imageId!: string;
	chat!: Chat;

	constructor(private chatService: ChatService) {}

	initiateChat() {
		this.chat = this.chatService.getChatByImageId(this.imageId);
	}

	ngOnInit(): void {
		this.initiateChat();
	}
}
