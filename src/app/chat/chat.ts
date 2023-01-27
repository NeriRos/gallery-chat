import { Message } from "../message/message";

export interface Chat {
	id: string;
	messages: Message[];
}
