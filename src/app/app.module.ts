import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ResourcesComponent } from './resources/resources.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ContentComponent } from './content/content.component';
import { TimelineDetailsComponent } from './timeline-details/timeline-details.component';
import { AppRoutingModule } from './app-routing.module';
import { ResourcesDetailsComponent } from './resources-details/resources-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ResourcesComponent,
    TimelineComponent,
    ContentComponent,
    TimelineDetailsComponent,
    ResourcesDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
