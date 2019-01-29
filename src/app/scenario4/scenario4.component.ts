import { Component } from '@angular/core';

@Component({
  selector: 'app-scenario4',
  templateUrl: './scenario4.component.html',
  // template: `
  //   <app-child2 [childMessage]="parentMessage"></app-child2>
  // `,
  styleUrls: ['./scenario4.component.css']
})
export class Scenario4Component {

  parentMessage = "message from parent";
  public str = ""
  constructor() { }

  ngOnInit() {
  }

}
