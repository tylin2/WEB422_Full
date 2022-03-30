import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from 'rxjs';
import { User } from './User';
const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getToken(){
    return localStorage.getItem("access_token")
  }

  readToken(){
    let token = this.getToken();
    return helper.decodeToken(token);
  }

  isAuthenticated(): boolean {
    let token = this.getToken();
    return (token) ? true: false;
  }

  login(user: User): Observable<any>{
    return this.http.post<any>("http://localhost:8080/api/login", user);
  }
}
