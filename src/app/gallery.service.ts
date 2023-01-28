import { Observable, Observer, ReplaySubject, Subject, of } from "rxjs";

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
		const item = this.items.filter((item) => item.id === id)[0];
		if (item) return of(item);

		return this.http.get<GalleryItem>(`http://localhost:5251/image/${id}`);
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
