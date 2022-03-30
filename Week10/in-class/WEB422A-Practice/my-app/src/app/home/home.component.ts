import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  num: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increaseNum(){
    this.num++;
  }


}
