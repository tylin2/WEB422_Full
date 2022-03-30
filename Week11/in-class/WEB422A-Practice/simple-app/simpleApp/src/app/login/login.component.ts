import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  warning: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.user = new User();
  }

  onSubmit(f: NgForm){
    this.auth.login(this.user).subscribe(message=>{
      localStorage.setItem("access_token", message.token);
      this.router.navigate(['/vehicles']);
    },err=>{
      console.log(err);
      this.warning = err.error.message;
    })
  }

}
