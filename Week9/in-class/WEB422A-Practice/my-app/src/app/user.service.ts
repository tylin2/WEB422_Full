import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsersByPageNum(pageNum): Observable<any>{
    return this.http.get<any>(`https://reqres.in/api/users?page=${pageNum}`);
  }

  getUserById(id): Observable<any>{
    return this.http.get<any>(`https://reqres.in/api/users/${id}`);
  }
}
