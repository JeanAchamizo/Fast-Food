import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    userTypeError: boolean = false; // Add a new variable for user type error

    constructor(private authService: UserService, private router: Router) {}

    login(): void {
        this.authService.login(this.email, this.password, this.userType).subscribe(
            (user: any) => {
                if (user) {
                    // Verifies that the type of user matches
                    if (user.role === (this.userType ? 'chef' : 'cliente')) {
                        // Authentication successful, you can redirect the user to the home page
                        console.log('Inicio de sesión exitoso');
                        this.router.navigate(['/home']);
                    } else {
                        // Type of user is incorrect
                        this.userTypeError = true;
                        console.log('Tipo de usuario incorrecto');
                    }
                } else {
                    // Authentication failed, show an error message
                    this.loginError = true;
                    console.log('Credenciales incorrectas');
                }
            },
            (error) => {
                // Handle errors if necessary
                console.error('Error de inicio de sesión', error);
            }
        );
    }
}

