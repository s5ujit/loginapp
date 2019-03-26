import { Component } from '@angular/core';
import {jobService} from './automation/job.service';
@Component({
  selector: 'job-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[jobService]
})
export class AppComponent {
  title = 'Learning jobs';
}
