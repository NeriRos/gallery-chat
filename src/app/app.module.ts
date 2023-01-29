import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { ChatComponent } from "./chat/chat.component";
import { ChatService } from "./chat.service";
import { GalleryComponent } from "./gallery/gallery.component";
import { GalleryItemComponent } from "./gallery-item/gallery-item.component";
import { GalleryService } from "./gallery.service";
import { HttpClientModule } from "@angular/common/http";
import { ImagePageComponent } from "./image-page/image-page.component";
import { MessageComponent } from "./message/message.component";
import { MessageCreatorComponent } from "./message-creator/message-creator.component";
import { NgModule } from "@angular/core";
import { SearchComponent } from "./search/search.component";
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    GalleryItemComponent,
    SearchComponent,
    ImagePageComponent,
    ChatComponent,
    MessageComponent,
    MessageCreatorComponent,
    ImageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
