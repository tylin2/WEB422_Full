import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsersByPage(pageNum): Observable<any>{
    return this.http.get<any>(`https://reqres.in/api/users?page=${pageNum}`)
  }

  getUserById(id): Observable<any>{
    return this.http.get<any>(`https://reqres.in/api/users/${id}`)
  }
  
  fetchUsers(): Observable<User[]>{
    return this.http.get<any>(`https://mainUserAPI.com/api/users`)
  }
}
