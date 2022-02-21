import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses!: Course[];
  userSubject = new Subject<Course[]>();
  
  constructor(private http: HttpClient) { }

  emitUsers() {
    this.userSubject.next(this.courses.slice());
  }

  addCourse(course: Course) {
    this.courses.push(course);
    this.emitUsers();
  }
}
