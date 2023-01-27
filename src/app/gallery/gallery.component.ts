import { Component, OnInit } from "@angular/core";
import { GalleryItem, SampleGalleryItem } from "../gallery-item/gallery-item";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  items: GalleryItem[] = Array.from(Array(8).keys()).map(_ => SampleGalleryItem);

  ngOnInit(): void {
    console.log("GALLERY ITEMS", this.items)
  }
}
