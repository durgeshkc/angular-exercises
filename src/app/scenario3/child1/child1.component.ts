import { Component, OnInit } from '@angular/core';
import { TargetLocator } from 'selenium-webdriver';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  message='durgesh'
  // message: string;
  // alertMe(cde){
  //   this.message = cde;
  //   console.log(this.message);
  // }
  constructor() { }

  ngOnInit() {
  }

}
