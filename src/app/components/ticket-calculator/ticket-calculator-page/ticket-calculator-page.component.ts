import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-calculator-page',
  templateUrl: './ticket-calculator-page.component.html',
  styleUrls: ['./ticket-calculator-page.component.scss'],
})
export class TicketCalculatorPageComponent implements OnInit {
  public singleDayPrice: number;
  public numOfDays = 1;
  public annualPassPrice: number;
  public totalPrice: number;

  constructor() {}

  ngOnInit() {}

  public singleDayPriceChange(value: string): void {
    this.singleDayPrice = parseInt(value, 10);
    this.totalPrice = this.singleDayPrice * this.numOfDays;
  }

  public numOfDaysChange(value: string): void {
    this.numOfDays = parseInt(value, 10);
    this.totalPrice = this.singleDayPrice * this.numOfDays;
  }
}
