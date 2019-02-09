import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostsCalculatorPageComponent } from './costs-calculator-page.component';

describe('CostsCalculatorPageComponent', () => {
  let component: CostsCalculatorPageComponent;
  let fixture: ComponentFixture<CostsCalculatorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostsCalculatorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostsCalculatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
