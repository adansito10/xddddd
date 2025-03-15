import { Component } from '@angular/core';

@Component({
  selector: 'app-analytics-admin',
  standalone: false,
  templateUrl: './analytics-admin.component.html',
  styleUrl: './analytics-admin.component.scss'
})
export class AnalyticsAdminComponent {
  selectedPeriod: string = 'month';

  onPeriodChange(value: string) {
    this.selectedPeriod = value;
    // Add logic to update analytics data based on the selected period
  }
}