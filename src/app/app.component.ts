import { Component } from '@angular/core';
import {COURSES} from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  object1 = COURSES[0];
  object2 = COURSES[1];
  object3 = COURSES[2];
}
