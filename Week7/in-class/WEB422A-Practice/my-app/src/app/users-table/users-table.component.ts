import { Component, OnInit } from '@angular/core';

class User{
  fName: string;
  lName: string;
  address: string;
  active: boolean;
}

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  tableNameSpan: number = 2;
  tableNameSpanColor: string = "blue";

  users: Array<User> = [] // or User[] for the type

  constructor() { }

  handleUstomEvent(e){
    //console.log("custom event triggered");
    console.log(e.message);
  }

  ngOnInit(): void {
    this.users = [
      {fName: "Fred", lName: "Flintstone", address: "123 Bedrock Cr.", active: true },
      {fName: "Wimla", lName: "Flintstone", address: "123 Bedrock Cr.", active: true },
      {fName: "Barney", lName: "Rubble", address: "124 Bedrock Cr.", active: false },
      
    ]
  }

}
