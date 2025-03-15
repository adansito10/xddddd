import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumen-admin',
  standalone: false,
  templateUrl: './resumen-admin.component.html',
  styleUrl: './resumen-admin.component.scss'
})
export class ResumenAdminComponent {
  constructor(private router: Router) {}

  displayedColumns: string[] = ['usuario', 'correo', 'fecha', 'cursos', 'estado', 'acciones'];
  usersData = [
    { name: 'Juan Díaz', email: 'juan.diaz@example.com', registerDate: '12/05/2023', courses: 2 },
    { name: 'María Rodríguez', email: 'maria.rodriguez@example.com', registerDate: '10/05/2023', courses: 3 }
  ];

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}