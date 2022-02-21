import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Course } from '../models/course';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { CourseService } from '../services/course.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.scss']
})
export class ListCourseComponent implements OnInit {

  courses!: Course[];
  courseSubscription!: Subscription;
  userId!: number;
  course!: Course;

  constructor(private courseService: CourseService, 
              private authService: AuthService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    /*this.userSubscription = this.activatedRoute.params.subscribe( params => {
      this.userId = parseInt(params['id']);
      this.userService.findOne(this.userId).pipe(
        map((user: User) => this.user = user)
      ).subscribe()
    }*/
    this.courseSubscription = this.courseService.userSubject.subscribe(
      (courses: Course[]) => {
        this.courses = courses;
      }
    );
    this.courseService.emitUsers();
  }

  ngOnDestroy(): void {
    this.courseSubscription.unsubscribe();
  }

  admin(){
    this.router.navigateByUrl('/admin');
  }
}
