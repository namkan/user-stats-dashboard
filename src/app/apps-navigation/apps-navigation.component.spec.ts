import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsNavigationComponent } from './apps-navigation.component';

describe('AppsNavigationComponent', () => {
  let component: AppsNavigationComponent;
  let fixture: ComponentFixture<AppsNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
