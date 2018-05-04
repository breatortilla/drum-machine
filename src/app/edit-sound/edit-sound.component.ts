import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Sound } from './../models/sounds.model';

@Component({
  selector: 'app-edit-sound',
  templateUrl: './edit-sound.component.html',
  styleUrls: ['./edit-sound.component.css']
})
export class EditSoundComponent {
  @Input() childSingleBeat: Sound[];
  @Input() childSingleBeatIndex: number;
  @Output() toggleSender = new EventEmitter();

  toggle(soundIndex: number) {
    this.toggleSender.emit([this.childSingleBeatIndex, soundIndex]);
  }
}
