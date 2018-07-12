import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviseUsageTableComponent } from './devise-usage-table.component';

describe('DeviseUsageTableComponent', () => {
  let component: DeviseUsageTableComponent;
  let fixture: ComponentFixture<DeviseUsageTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviseUsageTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviseUsageTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
