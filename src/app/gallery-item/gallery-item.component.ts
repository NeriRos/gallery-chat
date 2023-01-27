import { Component, Input, OnInit } from '@angular/core';

import { GalleryItem } from './gallery-item';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent implements OnInit {
  @Input() item!: GalleryItem;

  ngOnInit(): void {
    console.log("sadads", this.item)
  }
}
