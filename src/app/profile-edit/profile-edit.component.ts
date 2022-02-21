import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  selectedUser!: User;
  editForm!: FormGroup;
  isSubmitted = false;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.setupForm();
  }

  setupForm(){
    this.editForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: ['', Validators.required]
    });
    this.editForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
  }

  get f() { return this.editForm.controls; }

  onSubmit() {
    this.isSubmitted = true;
    if (this.editForm.invalid) {
      return;
    }
    if(this.isSubmitted){
      this.router.navigateByUrl('/profile');
    }
    /*this.userService.updateUser(this.editForm.value).subscribe(x => {
      window.location.reload();
    }, 
      error => {
        console.log('Error encountered during form submission');
      });*/
    // TODO: Use EventEmitter with form value
    //console.warn(this.editForm.value);
  }
  onValueChanged(data?: any) {

  }
}
