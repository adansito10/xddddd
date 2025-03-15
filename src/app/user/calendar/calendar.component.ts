import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  standalone: false,
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  days = Array.from({ length: 35 }, (_, i) => i - 2); // Simula los días del mes
}
