import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  users!: User[];
  userSubscription!: Subscription;
  userId!: number;
  user!: User;

  constructor(private userService: UserService, 
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
    this.userSubscription = this.userService.userSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.userService.emitUsers();
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
  edit(){
    this.router.navigateByUrl('/edit');
  }
  createCourse(){
    this.router.navigateByUrl('/create');
  }
  list(){
    this.router.navigateByUrl('/courses');
  }
}
