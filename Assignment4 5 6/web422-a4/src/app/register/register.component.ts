import { Component, OnInit } from '@angular/core';
import { RegisterUser } from '../RegisterUser';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUser: RegisterUser;
  warning: string;
  success: boolean
  loading: boolean;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.registerUser = {userName: "", password: "", password2: ""};
    this.success = false;
    this.loading = false;
  }

  onSubmit(){
   if(this.registerUser.userName != "" && this.registerUser.password == this.registerUser.password2){
     this.loading = true;
     this.auth.register(this.registerUser).subscribe(
      (success)  => {
        this.success = true;
        this.warning = "";
        this.loading = false;
        this.router.navigate(['/login']);
      },
      (err) => {
        this.success = false;
        this.loading = false;
        this.warning = err.error.message;
      }
     );
   }
  }

}
