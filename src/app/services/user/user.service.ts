import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from "rxjs";
import { switchMap } from 'rxjs/operators';
import { map } from "rxjs";
import { v4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = 'http://localhost:3000'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  checkUserExists(email: string, userType: boolean): Observable<boolean> {
    return this.http.get<any[]>(`${this.baseURL}/users`).pipe(
      map(users => users.some(user => user.email === email && user.role !== userType))
    );
  }

  login(email: string, password: string, userType:boolean): Observable<boolean> {
    const credentials = { email, password };

    // Comprueba si el usuario existe
    return this.checkUserExists(email, userType).pipe(
      switchMap(userExists => {
        if (userExists) {
          // Realiza una solicitud POST a la API para autenticar al usuario
          return this.http.post<any>(`${this.baseURL}/login`, credentials);
        } else {
          // Usuario no encontrado
          return of(null);
        }
      })
    );
  }

    signup(email: string, password: string, userType: boolean): Observable<any> {
        // Comprueba si el usuario existe antes de intentar registrarlo
        return this.checkUserExists(email, userType).pipe(
            switchMap((userExists) => {
                if (userExists) {
                    // Si el usuario ya existe, devuelve null u otra señal de que el registro falló
                    return of(null);
                } else {
                    // Genera un ID único para el nuevo usuario
                    const userId = v4();
                    const newUser = {
                        id: userId,
                        email,
                        password,
                        role: userType ? 'chef' : 'cliente',
                    };
                    // Realiza el registro del nuevo usuario
                    return this.http.post<any>(`${this.baseURL}/users`, newUser);
                }
            })
        );
    }

}
