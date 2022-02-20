import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: ['', Validators.required]
    })
  }

  onSubmit() {
    const formValue = this.registerForm.value;
    const user = new User(
      formValue['username'],
      formValue['password'],
      formValue['firstName'],
      formValue['lastName'],
      formValue['birthday'],
      formValue['gender']
    )
    this.userService.addUser(user);
    this.router.navigate(['/login']);
    //const { username, password, firstName, lastName, birthday, gender } = this.form;
    // TODO: Use EventEmitter with form value
    //console.warn(this.loginForm.value);
  }
}
