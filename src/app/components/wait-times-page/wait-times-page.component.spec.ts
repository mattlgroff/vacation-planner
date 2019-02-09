import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitTimesPageComponent } from './wait-times-page.component';

describe('WaitTimesPageComponent', () => {
  let component: WaitTimesPageComponent;
  let fixture: ComponentFixture<WaitTimesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitTimesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitTimesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
