import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListBeatIntervalsComponent } from './list-beat-intervals/list-beat-intervals.component';
import { AddSoundComponent } from './add-sound/add-sound.component';
import { EditSoundComponent } from './edit-sound/edit-sound.component';


@NgModule({
  declarations: [
    AppComponent,
    ListBeatIntervalsComponent,
    AddSoundComponent,
    EditSoundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
