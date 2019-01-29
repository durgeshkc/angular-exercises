import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  // template: `
  //     Say {{ childMessage }}
  // `,
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Input() childMessage: string;
  constructor() { }

  public showInput =""
  public showMessage(value)
  {
    this.showInput = value;
    console.log(value)
  }
  ngOnInit() {
  }

}
