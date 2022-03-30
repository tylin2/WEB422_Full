import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-say-message',
  templateUrl: './say-message.component.html',
  styleUrls: ['./say-message.component.css']
})
export class SayMessageComponent implements OnInit {
  
  message: string = ""; //default value
  message1: string[] = ["Hello","abc","5"];
  imgURL: string = "https://www.senecacollege.ca/content/dam/projects/seneca/campus-photos/king-magna-hall-entrance.jpg";

  constructor() { }
  
  ngOnInit(): void{
    this.message = "Hello World";

  }
}
