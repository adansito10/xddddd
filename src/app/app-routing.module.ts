import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CapacitacionComponent } from './pages/capacitacion/capacitacion.component';
import { TecnologiaComponent } from './pages/tecnologia/tecnologia.component';
import { AboutComponent } from './pages/about/about.component';
import { BenefitsComponent } from './pages/benefits/benefits.component';
import { ContactComponent } from './pages/contact/contact.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PanelUserComponent } from './user/panel-user/panel-user.component';
import { PanelAdminComponent } from './admin/panel-admin/panel-admin.component';
import { AuthGuard } from './guards/admin.guard';
import { ResumenComponent } from './user/resumen/resumen.component';
import { CoursesComponent } from './user/courses/courses.component';
import { CalendarComponent } from './user/calendar/calendar.component';
import { CertificatesComponent } from './user/certificates/certificates.component';
import { ProgressComponent } from './user/progress/progress.component';
import { ResumenAdminComponent } from './admin/resumen-admin/resumen-admin.component';
import { UsersAdminComponent } from './admin/users-admin/users-admin.component';
import { CoursesAdminComponent } from './admin/courses-admin/courses-admin.component';
import { AnalyticsAdminComponent } from './admin/analytics-admin/analytics-admin.component';
import { ReportsAdminComponent } from './admin/reports-admin/reports-admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'capacitacion', component: CapacitacionComponent },
  { path: 'tecnologia', component: TecnologiaComponent },
  { path: 'about', component: AboutComponent },
  { path: 'benefits', component: BenefitsComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'iniciar-sesion',
    component: IniciarSesionComponent,
    canActivate: [AuthGuard],
    data: { redirectIfAuthenticated: true }
  },
  { path: 'registro', component: RegistroComponent },
  {
    path: 'panel/admin',
    component: PanelAdminComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: 'admin' },
    children: [
      { path: 'resumen-admin', component: ResumenAdminComponent },
      { path: 'users-admin', component: UsersAdminComponent },
      { path: 'courses-admin', component: CoursesAdminComponent },
      { path: 'analytics-admin', component: AnalyticsAdminComponent },
      { path: 'reports-admin', component: ReportsAdminComponent },
      { path: '', redirectTo: 'resumen-admin', pathMatch: 'full' } // Redirige a resumen-admin por defecto
    ]
  },
  {
    path: 'panel/user',
    component: PanelUserComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: 'user' },
    children: [
      { path: 'resumen', component: ResumenComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'calendar', component: CalendarComponent },
      { path: 'certificates', component: CertificatesComponent },
      { path: 'progress', component: ProgressComponent },
      { path: '', redirectTo: 'resumen', pathMatch: 'full' } // Redirige a resumen por defecto
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}