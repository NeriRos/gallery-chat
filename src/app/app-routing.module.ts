import { RouterModule, Routes } from "@angular/router";

import { GalleryComponent } from "./gallery/gallery.component";
import { ImagePageComponent } from "./image-page/image-page.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
	{ path: "", component: GalleryComponent },
	{ path: "image", component: ImagePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
