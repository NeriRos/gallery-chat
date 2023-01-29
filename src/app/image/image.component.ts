import { Component, Input, OnInit } from "@angular/core";
import { Observable, fromEvent, map, take } from "rxjs";

import { Image } from "../gallery-item/gallery-item";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
	@Input() image!: Image;
	imageSize!: { height: number; width: number };
	showImageDetails = false;

	ngOnInit(): void {
		this.setImgSize();
	}

	setImgSize() {
		var image = new Image();
		let $loadedImg = fromEvent(image, "load").pipe(
			take(1),
			// rome-ignore lint/suspicious/noExplicitAny: <explanation>
			map((event: any): any => ({
				width: event?.target?.width,
				height: event?.target?.height,
			})),
		);

		image.src = this.image.path;
		$loadedImg.subscribe((size) => (this.imageSize = size));
	}

	hover(isOn: boolean) {
		this.showImageDetails = isOn;
	}
}
