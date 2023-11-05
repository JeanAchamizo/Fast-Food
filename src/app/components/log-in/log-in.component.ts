import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent {
  email: string = '';
  password: string = '';
  userType: boolean = false;
  loginError: boolean = false;

  constructor(private authService: UserService) {}

  login(): void {
    this.authService.login(this.email, this.password, this.userType).subscribe(
        (user: any) => {
          if (user) {
            // Verifica que el tipo de usuario coincida
            if (user.role === (this.userType ? 'chef' : 'cliente')) {
              // Autenticación exitosa, puedes redirigir al usuario a la página principal
              console.log('Inicio de sesión exitoso');
            } else {
              console.log('Tipo de usuario incorrecto');
            }
          } else {
            // Autenticación fallida, muestra un mensaje de error
            console.log('Credenciales incorrectas');
          }
        },
        (error) => {
          // Manejo de errores, si es necesario
          console.error('Error de inicio de sesión', error);
        }
    );
  }
}

