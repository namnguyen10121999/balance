import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableBalanceComponent } from './table-balance/table-balance.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableBalanceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Balance';
}
