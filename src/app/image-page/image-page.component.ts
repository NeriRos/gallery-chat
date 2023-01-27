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

	initiateGallery(id: string) {
		const galleryItem = this.galleryService.getItemById(id);

		if (galleryItem) {
			this.galleryItem = galleryItem;
		} else {
			alert("Image not found.");
			this.router.navigate(["/"]);
		}
	}

	ngOnInit(): void {
		this.route.queryParams.subscribe((params) => {
			if (params["id"]) this.initiateGallery(params["id"]);
			else {
				alert("Image id is required.");
				this.router.navigate(["/"]);
			}
		});
	}
}
