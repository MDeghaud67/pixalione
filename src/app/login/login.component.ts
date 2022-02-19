import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: any = {
    username: null,
    password: null
  };

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    const { username, password } = this.form;
    // TODO: Use EventEmitter with form value
    //console.warn(this.loginForm.value);
  }
}
