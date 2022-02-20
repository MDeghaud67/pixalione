import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup
  isSubmitted = false;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService, 
              private router: Router) { }

  ngOnInit(){
    this.initForm();
  }

  initForm(){
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  onSubmit() {
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.authService.signIn(this.loginForm.value);
    this.router.navigateByUrl('/profile');
    /*if (this.loginForm.valid) {
      console.log(this.loginForm.getRawValue());
    } else {
        console.log('There is a problem with the form');
    }*/
    //const { username, password } = this.form;
    // TODO: Use EventEmitter with form value
    //console.warn(this.loginForm.value);
  }

  validatorPassword(formControl: FormControl) {
    const value = formControl.value as string;
    const isInvalid = 'password' === value.trim().toLowerCase();
    return isInvalid ? { passwordError: 'Password is not a strong password'} : null;
  }
}
