import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users!: User[];
  userSubject = new Subject<User[]>();

  constructor(private http: HttpClient) { }

  /*findOne(id: number): Observable<User>{
    return this.http.get('api/users/' + id).pipe(
      map((user: User) => user)
    )
  }*/

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
