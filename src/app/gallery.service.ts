import { Observable, Observer, ReplaySubject, Subject } from "rxjs";

import { GalleryItem } from "./gallery-item/gallery-item";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
	items: GalleryItem[] = [];
	private $items: Subject<GalleryItem[]> = new Subject();

	constructor(private http: HttpClient) {}

	getItemById(id: string) {
		return this.items.filter((item) => item.id === id)[0];
	}

	requestItems() {
		const request = this.http.get<GalleryItem[]>(
			"http://localhost:5251/images",
		);

		request.subscribe((result) => {
			this.items = result;
			this.$items.next(result);
		});

		return this.$items;
	}
}
