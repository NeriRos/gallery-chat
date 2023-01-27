import { Component, OnInit } from "@angular/core";
import {
	GalleryItem,
	SampleGalleryItem,
	SampleGalleryItem2,
} from "../gallery-item/gallery-item";

import { GalleryService } from "../gallery.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
	items: GalleryItem[] = [];
	filteredItems = this.items;

	constructor(private galleryService: GalleryService) {}

	initiateGallery() {
		this.items = this.galleryService.getItems();
		this.filteredItems = this.items;
	}

	ngOnInit(): void {
		this.initiateGallery();
	}

	filterItems(searchText: string) {
		this.filteredItems = this.items.filter(
			(item) =>
				item.title.startsWith(searchText) ||
				item.author.name.startsWith(searchText),
		);
	}
}
