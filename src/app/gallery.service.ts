import {
	GalleryItem,
	SampleGalleryItem,
	SampleGalleryItem2,
} from "./gallery-item/gallery-item";

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
	items: GalleryItem[] = [
		SampleGalleryItem,
		SampleGalleryItem,
		SampleGalleryItem2,
		SampleGalleryItem,
		SampleGalleryItem2,
		SampleGalleryItem,
		SampleGalleryItem,
		SampleGalleryItem2,
	];

	constructor() {}

	getItemById(id: string) {
		return this.items.filter((item) => item.id === id)[0];
	}

	getItems() {
		return this.items;
	}
}
