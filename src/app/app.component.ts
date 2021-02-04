import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // @ts-ignore
  courses = COURSES;

  object1 = COURSES[0];
  object2 = COURSES[1];
  object3 = COURSES[2];

  // Create method onClassClicked()
  onCardClicked(course: Course) {
    console.log('App component - click event bubbled', course);
  }

  onCourseSelected(course: Course) {
    console.log('App component - Custom event bubbled..', course);
  }
}
