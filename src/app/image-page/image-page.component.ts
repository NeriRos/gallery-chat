import { ActivatedRoute, Router } from "@angular/router";

import { Component } from "@angular/core";
import { GalleryItem } from "../gallery-item/gallery-item";
import { GalleryService } from "../gallery.service";

@Component({
  selector: 'app-image-page',
  templateUrl: './image-page.component.html',
  styleUrls: ['./image-page.component.css']
})
export class ImagePageComponent {
	galleryItem!: GalleryItem;

	constructor(
		private galleryService: GalleryService,
		private route: ActivatedRoute,
		private router: Router,
	) {}

	initiateGallery() {
		const id = this.route.snapshot.queryParams["id"];

		if (!id) {
			alert("Image id is required.");
			this.router.navigate(["/"]);
			return;
		}

		this.galleryService.getItemById(id).subscribe((item) => {
			if (!item) {
				alert("Gallery item not found.");
				this.router.navigate(["/"]);
				return;
			}

			this.galleryItem = item;
		});
	}

	ngOnInit(): void {
		this.initiateGallery();
	}
}
