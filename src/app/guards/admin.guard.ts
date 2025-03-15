import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLoggedIn = this.authService.isLoggedIn();
    const expectedRole = route.data['expectedRole'];
    const redirectIfAuthenticated = route.data['redirectIfAuthenticated'];
    const currentUrl = state.url;

    console.log('AuthGuard - URL actual:', currentUrl);
    console.log('AuthGuard - Está autenticado:', isLoggedIn);
    console.log('AuthGuard - Datos de la ruta:', route.data);

    // Si el usuario no está autenticado y la ruta requiere autenticación
    if (!isLoggedIn && !redirectIfAuthenticated) {
      console.log('Usuario no autenticado, redirigiendo a /iniciar-sesion');
      this.router.navigate(['/iniciar-sesion'], { queryParams: { returnUrl: state.url } });
      return false;
    }

    // Si el usuario está autenticado pero intenta acceder a /iniciar-sesion, redirigir al panel correspondiente
    if (isLoggedIn && redirectIfAuthenticated && currentUrl === '/iniciar-sesion') {
      console.log('Usuario autenticado, redirigiendo desde /iniciar-sesion');
      const role = this.authService.getRole();
      this.router.navigate([role === 'admin' ? '/panel/admin' : '/panel/user'])
        .then(() => console.log('Redirección exitosa'))
        .catch(err => console.error('Error en redirección:', err));
      return false;
    }

    // Verificar el rol solo si expectedRole está definido y el usuario está autenticado
    if (isLoggedIn && expectedRole && this.authService.getRole() !== expectedRole) {
      console.log('El rol no coincide, redirigiendo');
      this.router.navigate([this.authService.getRole() === 'admin' ? '/panel/admin' : '/panel/user']);
      return false;
    }

    // Permitir la navegación si el usuario está autenticado y la URL está dentro del panel de administración
    if (isLoggedIn && currentUrl.startsWith('/panel/admin')) {
      console.log('Acceso permitido dentro del panel de administración');
      return true;
    }

    console.log('Acceso permitido');
    return true;
  }
}