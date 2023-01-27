import { User } from "../user";

export interface Message {
	id: string;
	chatId: string;
	date: Date;
	sender: User;
	text: string;
}
