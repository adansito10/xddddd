import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: false,
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  errorMessage: string | null = null;
  private authCheckInterval: any; // Para almacenar el intervalo

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute // Para obtener el returnUrl
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    // Verificar si el usuario ya está autenticado al cargar el componente
    if (this.authService.isLoggedIn()) {
      const role = this.authService.getRole();
      const returnUrl = this.route.snapshot.queryParams['returnUrl'] || (role === 'admin' ? '/panel/admin' : '/panel/user');
      this.router.navigate([returnUrl])
        .then(() => console.log('Redirigido por autenticación inicial'))
        .catch(err => console.error('Error en redirección inicial:', err));
      return; // Salir si ya está autenticado
    }

    // Iniciar intervalo solo para detectar autenticación mientras está en /iniciar-sesion
    this.authCheckInterval = setInterval(() => {
      if (this.authService.isLoggedIn() && this.router.url === '/iniciar-sesion') {
        const role = this.authService.getRole();
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || (role === 'admin' ? '/panel/admin' : '/panel/user');
        this.router.navigate([returnUrl])
          .then(() => console.log('Redirigido por intervalo'))
          .catch(err => console.error('Error en redirección por intervalo:', err));
      }
    }, 100); // Verifica cada 100ms
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')!.value;
      const password = this.loginForm.get('password')!.value;

      console.log('Intentando login con:', { email, password });

      if (this.authService.login(email, password)) {
        const role = this.authService.getRole();
        console.log('Rol detectado:', role);
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || (role === 'admin' ? '/panel/admin' : '/panel/user');
        this.router.navigate([returnUrl])
          .then(() => {
            console.log('Redirigido después de login');
            this.clearAuthCheckInterval(); // Detener el intervalo al iniciar sesión
          })
          .catch(err => console.error('Error en redirección después de login:', err));
      } else {
        this.errorMessage = 'Correo o contraseña incorrectos.';
      }
    } else {
      this.errorMessage = 'Por favor, completa todos los campos correctamente.';
    }
  }

  // Método para detener el intervalo
  private clearAuthCheckInterval() {
    if (this.authCheckInterval) {
      clearInterval(this.authCheckInterval);
      this.authCheckInterval = null;
      console.log('Intervalo detenido');
    }
  }

  // Detener el intervalo al destruir el componente
  ngOnDestroy() {
    this.clearAuthCheckInterval();
  }
}