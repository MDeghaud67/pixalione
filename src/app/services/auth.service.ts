import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public signIn(userData: User){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }

  login(username: string, password: string): Observable<any>{
    return this.http.post(AUTH_API + 'signup', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, password: string, firstName: string, lastName: string, birthday: string, gender: string): Observable<any>{
    return this.http.post(AUTH_API + 'signin', {
      username,
      password,
      firstName,
      lastName,
      birthday,
      gender
    }, httpOptions);
  }
}
