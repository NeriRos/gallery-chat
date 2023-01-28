import { User, getUser } from "../user";

export interface GalleryItem {
	image: Image;
	author: User;
	title: string;
	description: string;
	id: string;
}

export interface Image {
	id: string;
	path: string;
}
