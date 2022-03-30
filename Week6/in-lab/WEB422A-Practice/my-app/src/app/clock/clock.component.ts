import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {

  @Input() locale: string = "en-CA"; // default value is "en-CA"

  currentDate: Date = new Date(); // new Date() is the default value
  private dateInterval: any; // private because we don't want the option to render it

  constructor() { }

  ngOnInit(): void {
    this.dateInterval = setInterval(()=>{
      this.currentDate = new Date();
    }, 1000);
  }

  ngOnDestroy(): void{
    clearInterval(this.dateInterval)
  }

}
