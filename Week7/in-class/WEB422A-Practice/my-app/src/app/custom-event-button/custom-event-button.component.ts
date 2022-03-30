import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-event-button',
  templateUrl: './custom-event-button.component.html',
  styleUrls: ['./custom-event-button.component.css']
})
export class CustomEventButtonComponent implements OnInit {

  constructor() { }

  @Output() customEvent = new EventEmitter();

  btnClicked(){
    //console.log("button Clicked");
    this.customEvent.emit({message: "Hello from Custom Event Button Component"})
  }

  ngOnInit(): void {
  }

}
