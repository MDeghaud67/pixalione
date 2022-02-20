import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string){
    /*return this.http.post(AUTH_API + 'signup', {
      username,
      password
    }, httpOptions);*/
  }

  /*register(username: string, password: string, firstName: string, lastName: string, birthday: string, gender: string): /*Observable<any>{
    /*return this.http.post(AUTH_API + 'signin', {
      username,
      password,
      firstName,
      lastName,
      birthday,
      gender
    }, httpOptions);
  }*/
}
