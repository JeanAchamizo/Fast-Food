import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../../services/user/user.service';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
    email: string = '';
    password: string = '';
    confirm_password: string = '';
    userType: boolean = false;
    signUpError: boolean = false;
    passwordMismatch: boolean = false;

    constructor(private authService: UserService, private router: Router) {}

    signup(): void {
       this.authService.signup(this.email, this.password, this.userType).subscribe(
            (user: any) => {
              if(this.password != this.confirm_password) {
                this.passwordMismatch = true;
                console.log('Las contraseñas no coinciden');
              }else {
                if (user) {
                  // Registro exitoso, puedes redirigir al usuario a la página principal
                  console.log('Registro exitoso');
                  this.router.navigate(['/login']);
                } else {
                  // Registro fallido, muestra un mensaje de error
                  this.signUpError = true;
                  console.log('El usuario ya existe');
                }
              }
            },
            (error) => {
                // Manejo de errores, si es necesario
                console.error('Error de registro', error);
            }
        );
    }
}
