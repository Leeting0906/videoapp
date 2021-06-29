import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { BasicComponent } from './basic/basic.component';
import { HomeComponent } from './home/home.component';
import { VideolistComponent } from './videolist/videolist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { AddvideoComponent } from './addvideo/addvideo.component';
import { VideodetailComponent } from './videodetail/videodetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroChildComponent,
    HeroParentComponent,
    BasicComponent,
    HomeComponent,
    VideolistComponent,
    AddvideoComponent,
    VideodetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
