import { TestUser, User } from "../user";

export interface GalleryItem {
	image: Image;
	author: User;
	title: string;
	description: string;
}

export interface Image {
  id: string;
  path: string;
}

export const SampleImage: Image = {
id: "imageeeeID",
path: "/assets/test.jpg"
}

export const SampleGalleryItem: GalleryItem = {
	author: TestUser,
	description: "Lorem Ipsum",
	title: "Developer photo",
	image: SampleImage,
};

export const SampleGalleryItem2: GalleryItem = {
	author: TestUser,
	description: "Lorem Ipsum",
	title: "A Full Stack Developer photo",
	image: SampleImage,
};
