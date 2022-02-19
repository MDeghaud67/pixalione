import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: any = {
    username: null,
    password: null,
    firstName: null,
    lastName: null,
    birthday: null,
    gender: null
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const { username, password, firstName, lastName, birthday, gender } = this.form;
    // TODO: Use EventEmitter with form value
    //console.warn(this.loginForm.value);
  }
}
