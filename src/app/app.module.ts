import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table'; // Necesario para mat-table

import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips'; // Añadir este módulo
import { MatTabsModule } from '@angular/material/tabs'; // Para tabs
import { MatProgressBarModule } from '@angular/material/progress-bar'; // Para progress
import { FormsModule } from '@angular/forms'; // Para formularios
import { MatSelectModule } from '@angular/material/select'; // Para select
import { MatRadioModule } from '@angular/material/radio'; // Para radio buttons

// Shared
import { HeaderComponent } from './shared/header/header.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { FooterComponent } from './shared/footer/footer.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { CapacitacionComponent } from './pages/capacitacion/capacitacion.component';
import { TecnologiaComponent } from './pages/tecnologia/tecnologia.component';
import { AboutComponent } from './pages/about/about.component';
import { BenefitsComponent } from './pages/benefits/benefits.component';
import { ContactComponent } from './pages/contact/contact.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthService } from './services/auth.service';
import { IniciarComponent } from './pages/iniciar/iniciar.component';
import { AuthGuard } from './guards/admin.guard';

// User
import { PanelUserComponent } from './user/panel-user/panel-user.component';
import { ResumenComponent } from './user/resumen/resumen.component';
import { CoursesComponent } from './user/courses/courses.component';
import { CalendarComponent } from './user/calendar/calendar.component';
import { CertificatesComponent } from './user/certificates/certificates.component';
import { ProgressComponent } from './user/progress/progress.component';

// Admin
import { PanelAdminComponent } from './admin/panel-admin/panel-admin.component';
import { ResumenAdminComponent } from './admin/resumen-admin/resumen-admin.component';
import { UsersAdminComponent } from './admin/users-admin/users-admin.component';
import { CoursesAdminComponent } from './admin/courses-admin/courses-admin.component';
import { AnalyticsAdminComponent } from './admin/analytics-admin/analytics-admin.component';
import { ReportsAdminComponent } from './admin/reports-admin/reports-admin.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    CapacitacionComponent,
    TecnologiaComponent,
    AboutComponent,
    BenefitsComponent,
    ContactComponent,
    RegistroComponent,
    PanelAdminComponent,
    PanelUserComponent,
    IniciarComponent, 
    IniciarSesionComponent,
    ResumenComponent, 
    CoursesComponent, 
    CalendarComponent, 
    CertificatesComponent, 
    ProgressComponent, 
    ResumenAdminComponent, 
    UsersAdminComponent, 
    CoursesAdminComponent, 
    AnalyticsAdminComponent, 
    ReportsAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatIconModule,
    MatChipsModule,
    MatProgressBarModule,
    MatTabsModule,
    FormsModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatCheckboxModule,
    MatDialogModule
    ],
  providers: [AuthService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Añadido para suprimir el error
  bootstrap: [AppComponent]
})
export class AppModule { }
