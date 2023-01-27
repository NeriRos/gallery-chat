import { Component, Input, OnInit } from "@angular/core";

import { GalleryItem } from "./gallery-item";
import { Router } from "@angular/router";

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent {
	@Input() item!: GalleryItem;
	@Input() layout: string = "list-item";

	constructor(private router: Router) {}

	selectItem() {
		console.log("ITEMTETME");
		this.router.navigate(["/image"], { queryParams: { id: this.item.id } });
	}
}
