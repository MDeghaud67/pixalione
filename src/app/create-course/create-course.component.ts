import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {

  courseForm!: FormGroup;
  isSubmitted = false;

  constructor(private formBuilder: FormBuilder,
              private courseService: CourseService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.courseForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: ['', Validators.required],
      role: ['', Validators.required]
    })
  }

  get f() { return this.courseForm.controls; }

  onSubmit() {
    this.isSubmitted = true;
    const formValue = this.courseForm.value;
    const course = new Course(
      formValue['name'],
      formValue['description'],
      formValue['category'],
      formValue['subject'],
      formValue['time'],
      formValue['nbStudent'],
    )
    this.courseService.addCourse(course);
    this.router.navigate(['/courses']);
    //const { username, password, firstName, lastName, birthday, gender } = this.form;
    // TODO: Use EventEmitter with form value
    //console.warn(this.loginForm.value);
  }
}
