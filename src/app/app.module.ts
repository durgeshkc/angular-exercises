import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Scenario2Component } from './scenario2/scenario2.component';
import { Scenario1Component } from './scenario1/scenario1.component';
import { Scenario3Component } from './scenario3/scenario3.component';
import { Child1Component } from './scenario3/child1/child1.component';
import { Scenario4Component } from './scenario4/scenario4.component';
import { Child2Component } from './scenario4/child2/child2.component';
import { Scenario5Component } from './scenario5/scenario5.component';
import { ImmediateChildComponent } from './scenario5/immediate-child/immediate-child.component';
import { GrandChildComponent } from './scenario5/immediate-child/grand-child/grand-child.component';

@NgModule({
  declarations: [
    AppComponent,
    Scenario2Component,
    Scenario1Component,
    Scenario3Component,
    Child1Component,
    Scenario4Component,
    Child2Component,
    Scenario5Component,
    ImmediateChildComponent,
    GrandChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
