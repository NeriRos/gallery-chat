import { Message, SampleMessage } from "../message/message";

import { SampleImage } from "../gallery-item/gallery-item";

export interface Chat {
	id: string;
	imageId: string;
	messages: Message[];
}

export const SampleChat: Chat = {
	id: "chat1",
	imageId: SampleImage.id,
	messages: [SampleMessage],
};
