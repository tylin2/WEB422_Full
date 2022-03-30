import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-say-message',
  templateUrl: './say-message.component.html',
  styleUrls: ['./say-message.component.css']
})
export class SayMessageComponent implements OnInit {

  @Input() msg: string;

  //message: string = ""; // default value
  imgUrl: string = "https://www.senecacollege.ca/content/dam/projects/seneca/campus-photos/king-magna-hall-entrance.jpg";

  constructor() { }

  ngOnInit(): void {
    //this.message = "Hello World";
  }

  handleBtnClick(e, someValue){
    console.log(someValue)
    console.log(e);
    this.msg += "!";
  }

}
