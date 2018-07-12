import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorGraphComponent } from './behavior-graph.component';

describe('BehaviorGraphComponent', () => {
  let component: BehaviorGraphComponent;
  let fixture: ComponentFixture<BehaviorGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehaviorGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
