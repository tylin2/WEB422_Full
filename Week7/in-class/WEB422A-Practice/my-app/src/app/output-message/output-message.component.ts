import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-output-message',
  templateUrl: './output-message.component.html',
  styleUrls: ['./output-message.component.css']
})
export class OutputMessageComponent implements OnInit {

  @Input() msg: string = ""; // default value of "" in case msg is missing

  constructor() { }

  ngOnInit(): void {
  }

}
