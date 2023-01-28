import { Component, OnInit } from "@angular/core";

import { GalleryItem } from "../gallery-item/gallery-item";
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
		this.galleryService.requestItems().subscribe((items) => {
			this.items = items;
			this.filteredItems = items;
		});
	}

	ngOnInit(): void {
		this.initiateGallery();
	}

	filterItems(searchText: string) {
		this.filteredItems = this.items.filter(
			(item) =>
				item.title.startsWith(searchText) ||
				item.author.fullname.startsWith(searchText),
		);
	}
}
