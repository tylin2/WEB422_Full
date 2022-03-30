import { Component, OnInit } from '@angular/core';
import { User } from '../User'
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  currentUser: User;
  num: number;

  constructor(private uService: UserService) { }

  ngOnInit(): void {
    //this.currentUser = this.uService.getUser();
    /*this.uService.getUser().then(data=>{
      this.currentUser = data;
    });*/
    this.uService.getUser(3).subscribe(
      data=>{
        this.currentUser = data;
      }
    );

    this.uService.getNum().subscribe(
      data=>{this.num = data},
      err=>{},
      ()=>{ console.log("complete!");}
    )
  }

}
