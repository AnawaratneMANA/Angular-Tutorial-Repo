import {Component, Input, OnInit, Output} from '@angular/core';
import { Course } from '../model/course';
import {EventEmitter} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  c: Course;

  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {

  }

  onCourseViewed() {
    console.log('card component - button clicked');
    this.courseSelected.emit(this.c);
    // Emitter is sending the c object.
  }

}
