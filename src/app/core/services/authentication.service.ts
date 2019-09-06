import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isUserLoggedIn = false;
  private isUserAdmin = false;
  private name = null;

  redirectUrl: string;

  login(name: string): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => {
        this.isUserLoggedIn = val;
        this.isUserAdmin = name === 'admin';
        this.name = name;
      })
    );
  }

  logout(): void {
    this.isUserLoggedIn = false;
    this.isUserAdmin = false;
    this.name = '';
  }

  isLoggedIn(): boolean {
    return this.isUserLoggedIn;
  }

  isAdmin(): boolean {
    return this.isUserAdmin;
  }

  getUserName(): string {
    return this.name;
  }
}
