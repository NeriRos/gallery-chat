import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { GalleryComponent } from "./gallery/gallery.component";
import { GalleryItemComponent } from "./gallery-item/gallery-item.component";
import { NgModule } from "@angular/core";
import { SearchComponent } from "./search/search.component";

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    GalleryItemComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
