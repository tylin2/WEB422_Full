import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  warning: string;  
  loading: boolean;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.user = {userName: "", password: "", _id: ""};
    this.loading = false;
  }

  onSubmit(){
    if(this.user.userName != "" && this.user.password != ""){
      this.loading = true;
      this.auth.login(this.user).subscribe(message=>{
        this.loading = false;
        localStorage.setItem("access_token", message.token);
        this.router.navigate(['/newReleases']);
      },err=>{
        console.log(err);
        this.loading = false;
        this.warning = err.error.message;
      })
    }
  }

}
