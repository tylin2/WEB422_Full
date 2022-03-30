import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  num: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    this.num++;
  }

}
