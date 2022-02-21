import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject!: BehaviorSubject<User>;
  public user!: Observable<User>;
  constructor(private http: HttpClient,
              private router: Router) {
                //this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
                //this.user = this.userSubject.asObservable();
               }
  public get userValue(): User {
    return this.userSubject.value;
  }

  public login(userData: User){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
    /*return this.http.post<any>(`${environment.AUTH_API}/users/authenticate`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));*/
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout(){
    localStorage.removeItem('user');
    //this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

  /*login(username: string, password: string): Observable<any>{
    return this.http.post(AUTH_API + 'signup', {
      username,
      password
    }, httpOptions);
  }*/

  /*register(username: string, password: string, firstName: string, lastName: string, birthday: string, gender: string): Observable<any>{
    return this.http.post(AUTH_API + 'signin', {
      username,
      password,
      firstName,
      lastName,
      birthday,
      gender
    }, httpOptions);
  }*/
}
