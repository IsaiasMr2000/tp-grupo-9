import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

interface User {
  id: number;
  email: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private currentUserSubject = new BehaviorSubject<User | null>(null);

  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private router: Router) {
    // Verificar si hay un token guardado al iniciar el servicio
    const token = localStorage.getItem('token');
    if (token) {
      this.isAuthenticatedSubject.next(true);
      // Aquí podrías cargar los datos del usuario desde el token o hacer una llamada al backend
    }
  }

  async login(email: string, password: string): Promise<boolean> {
    try {
      // Simulación de llamada a API
      if (email === 'test@example.com' && password === '123456') {
        const mockUser: User = {
          id: 1,
          email: email,
          name: 'Usuario de Prueba',
        };

        // Guardar token y datos de usuario
        localStorage.setItem('token', 'mock-jwt-token');
        this.currentUserSubject.next(mockUser);
        this.isAuthenticatedSubject.next(true);

        await this.router.navigate(['/home']);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error durante el login:', error);
      return false;
    }
  }

  logout(): void {
    // Limpiar datos de autenticación
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }
}
