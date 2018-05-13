import { Component } from '@angular/core';
import {VideoService} from './training/video.service';
@Component({
  selector: 'video-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[VideoService]
})
export class AppComponent {
  title = 'Learning Videos';
}
