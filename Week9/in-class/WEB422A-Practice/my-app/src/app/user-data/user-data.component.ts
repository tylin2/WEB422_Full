import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  userData: any;
  singleUser: any;

  constructor(private uService: UserService) { }

  ngOnInit(): void {
    this.uService.getUsersByPageNum(1).subscribe(data => this.userData = data.data);
    this.uService.getUserById(1).subscribe(data => this.singleUser = data.data);
  }

}
