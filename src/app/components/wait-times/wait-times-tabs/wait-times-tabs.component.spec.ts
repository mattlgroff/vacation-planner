import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitTimesTabsComponent } from './wait-times-tabs.component';

describe('WaitTimesComponent', () => {
  let component: WaitTimesTabsComponent;
  let fixture: ComponentFixture<WaitTimesTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WaitTimesTabsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitTimesTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
