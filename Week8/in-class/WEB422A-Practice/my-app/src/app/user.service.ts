import { Injectable } from '@angular/core';
import { User } from './User';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  /*getUser(): User{
    return {
      id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg"
    }
  }*/

  /*getUser(): Promise<User>{
    return new Promise<User>((resolve,reject)=>{
      setTimeout(()=>{
        resolve({
          id: 2,
            email: "janet.weaver@reqres.in",
            first_name: "Janet",
            last_name: "Weaver",
            avatar: "https://reqres.in/img/faces/2-image.jpg"
        });
      },1000);
    });
  }*/

  /*getUser(): Observable<User>{
    return new Observable<User>(observer=>{
      setTimeout(()=>{
        observer.next({ // for an error instead of reject, we have: observer.error()
          id: 2,
            email: "janet.weaver@reqres.in",
            first_name: "Janet",
            last_name: "Weaver",
            avatar: "https://reqres.in/img/faces/2-image.jpg"
        })
      },1000);
    })
  }*/

  getUser(userNum): Observable<User>{
    return this.http.get<any>(`https://reqres.in/api/users/${userNum}`).pipe(map(x => x.data));
    //return this.http.post(`someUrl`,{x: "y"},{headers: {'content-type': 'application/json'}})

  }

  getNum(): Observable<number>{
    return new Observable<number>(o=>{
      let count = 0;
      let max = 5;

      let interval = setInterval(()=>{
        count++
        if(count > max){
          clearInterval(interval);
          o.complete();
        }else{
          o.next(count)
        }
      },1000)

    }).pipe(filter(num => num %2 != 0));
  }
}
