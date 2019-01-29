import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmediateChildComponent } from './immediate-child.component';

describe('ImmediateChildComponent', () => {
  let component: ImmediateChildComponent;
  let fixture: ComponentFixture<ImmediateChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmediateChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmediateChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
