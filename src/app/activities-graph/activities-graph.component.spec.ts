import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitesGraphComponent } from './activites-graph.component';

describe('ActivitesGraphComponent', () => {
  let component: ActivitesGraphComponent;
  let fixture: ComponentFixture<ActivitesGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitesGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitesGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
