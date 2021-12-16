import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FileAccessSystemComponent } from './file-access-system/file-access-system.component';
import { MediaCaptureComponent } from './media-capture/media-capture.component';

@NgModule({
  declarations: [
    AppComponent,
    FileAccessSystemComponent,
    MediaCaptureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
