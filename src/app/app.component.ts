import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConvertPipe } from './convert.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleCasePipe, DatePipe, CurrencyPipe, DecimalPipe, JsonPipe, ConvertPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  payeeName: string = '';
  paymentDate: string = '';
  amount: number = 0;
  height: number = 0;
  miles: number = 0;

  car = {
    make: 'Tesla',
    model: 'Model S',
    year: 2022,
    mileage: 150000,
    color: 'Black',
    price: 60000,
  }

  onNameChange(event: Event) {
    this.payeeName = (event.target as HTMLInputElement).value;
  }

  onDateChange(event: Event) {
    this.paymentDate = (event.target as HTMLInputElement).value;
  }

  onAmountChange(event: Event) {
    this.amount = Number((event.target as HTMLInputElement).value);
  }

  onHeightChange(event: Event) {
    this.height = Number((event.target as HTMLInputElement).value);
  }

  onMilesChange(event: Event) {
    this.miles = Number((event.target as HTMLInputElement).value);
  }
}
