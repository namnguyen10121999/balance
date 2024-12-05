import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableBalanceComponent } from './table-balance/table-balance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TableBalanceComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BalanceXperc';
}
