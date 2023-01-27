import { TestUser, User } from "../user";

export interface Message {
	id: string;
	chatId: string;
	author: User;
	text: string;
}

export const SampleMessage: Message = {
	id: "message1",
	chatId: "chat1",
	author: TestUser,
	text: "Nice image bro!",
};
