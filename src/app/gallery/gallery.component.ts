import { Component, OnInit } from "@angular/core";
import {
	GalleryItem,
	SampleGalleryItem,
	SampleGalleryItem2,
} from "../gallery-item/gallery-item";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
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
	filteredItems = [...this.items];

	ngOnInit(): void {
		console.log("GALLERY ITEMS", this.items);
	}

	filterItems(searchText: string) {
		this.filteredItems = this.items.filter(
			(item) =>
				item.title.startsWith(searchText) ||
				item.author.name.startsWith(searchText),
		);
	}
}
