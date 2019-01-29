import { DataService } from './../../../data.service';
import { Component, OnInit } from '@angular/core';
// import { DataService } from "/scenario5/DataService";
@Component({
  selector: 'app-grand-child',
  // templateUrl: './grand-child.component.html',
  template: `
    {{message}}
    <button (click)="newMessage()">New Message</button>
  `,
  styleUrls: ['./grand-child.component.css']
})
export class GrandChildComponent implements OnInit {

  grandChildMessage:string
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.grandChildMessage = message)
  }


  newMessage() {
    this.data.changeMessage("Hello from your GrandChild")
  }
}
