import {Component, Input, OnInit, Output} from '@angular/core';
import {Course} from '../model/course';
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

  @Input()
  num: number;


  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor() {
  }

  ngOnInit(): void {

  }

  onCourseViewed() {
    console.log('card component - button clicked');
    this.courseSelected.emit(this.c);
    // Emitter is sending the c object.
  }

  isImageIsVisible() {
    // tslint:disable-next-line:no-unused-expression
    return this.c && this.c.iconUrl;
  }

  applyStyle() {
    // tslint:disable-next-line:triple-equals
    if (this.c.category == 'ADVANCED') {
      return 'beginner';
    }
  }

  cardStyles() {
    const icon = this.c.iconUrl;
    return {
      'background-image': 'url ( ' + icon + ')',
    };
  }
}
