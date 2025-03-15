import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-admin',
  standalone: false,
  templateUrl: './courses-admin.component.html',
  styleUrl: './courses-admin.component.scss'
})
export class CoursesAdminComponent {
  searchTerm: string = '';

  onSearchChange(value: string) {
    this.searchTerm = value;
    // Add search logic here
  }
}