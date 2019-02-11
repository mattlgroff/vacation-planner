import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WaitTimesTabsComponent } from './wait-times-tabs.component';
import { WaitTimesService } from './wait-times.service';
import { MatTabsModule, MatCardModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('WaitTimesComponent', () => {
  let component: WaitTimesTabsComponent;
  let fixture: ComponentFixture<WaitTimesTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatCardModule,
        MatTabsModule,
        HttpClientModule,
      ],
      declarations: [WaitTimesTabsComponent],
      providers: [WaitTimesService],
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
