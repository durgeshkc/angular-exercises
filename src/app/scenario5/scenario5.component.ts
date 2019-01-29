import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
@Component({
  selector: 'app-scenario5',
  templateUrl: './scenario5.component.html',
  // template: `
  //   {{message}}
  //   <app-immediate-child> </app-immediate-child>
  // `,
  styleUrls: ['./scenario5.component.css']
})
export class Scenario5Component implements OnInit {

  message:string
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

}
