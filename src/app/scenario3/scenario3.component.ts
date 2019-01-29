import { Child1Component } from './child1/child1.component';
import { Component, ViewChild,AfterViewInit } from '@angular/core';
// import { Child1Component } from "../child/Child1Component.component"

@Component({
  selector: 'app-scenario3',
  //templateUrl: './scenario3.component.html',
  template : `
  <h3>Task3</h3>
  Message: {{ message }}
  <app-child1></app-child1>
`,
  styleUrls: ['./scenario3.component.css']
})
export class Scenario3Component implements AfterViewInit{
  @ViewChild(Child1Component) child;
  
  message:string;

  ngAfterViewInit(){
    //throw new Error("Method not implemented.");
    this.message = this.child.message
  }

  constructor() { }

  ngOnInit() {
  }

}
