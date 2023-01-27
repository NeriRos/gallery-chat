import { Component, EventEmitter, Output } from "@angular/core";
import { Subscription, debounceTime } from "rxjs";

import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
	@Output() searchEvent = new EventEmitter<string>();

	searchControl = new FormControl("");
	searchSubscription = new Subscription();

	ngOnInit() {
		this.searchSubscription = this.searchControl.valueChanges
			.pipe(debounceTime(500))
			.subscribe((text) => {
				this.search(text || "");
			});
	}

	ngOnDestroy() {
		this.searchSubscription.unsubscribe();
	}

	search(text: string) {
		this.searchEvent.emit(text);
	}
}
