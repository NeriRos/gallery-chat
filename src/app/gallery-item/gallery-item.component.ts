import { Component, Input, OnInit } from '@angular/core';

import { GalleryItem } from './gallery-item';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent {
  @Input() item!: GalleryItem;
}
