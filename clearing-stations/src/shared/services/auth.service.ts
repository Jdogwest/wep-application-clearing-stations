import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_BE_HOST } from '../../../env';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrls = {
    login: API_BE_HOST + 'auth/login/',
    register: API_BE_HOST + 'auth/register/',
    me: API_BE_HOST + 'users/me/',
    logout: API_BE_HOST + 'auth/logout/',
  };

  private readonly httpClient = inject(HttpClient);

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn$: Observable<boolean> =
    this.isLoggedInSubject.asObservable();

  register(registerData: {
    email: string;
    password: string;
    name: string;
    surname: string;
  }) {
    const payload = {
      email: registerData.email,
      password: registerData.password,
      fio: `${registerData.name} ${registerData.surname}`.trim(),
    };
    return this.httpClient.post(this.apiUrls.register, payload);
  }

  login(loginData: { email: string; password: string }) {
    const payload = {
      email: loginData.email,
      password: loginData.password,
    };
    return this.httpClient
      .post(this.apiUrls.login, payload, {
        withCredentials: true,
      })
      .pipe(
        tap(() => {
          this.isLoggedInSubject.next(true);
        })
      );
  }

  checkAuth() {
    this.httpClient.get(this.apiUrls.me, { withCredentials: true }).subscribe({
      next: () => this.isLoggedInSubject.next(true),
      error: () => this.isLoggedInSubject.next(false),
    });
  }

  logout() {
    return this.httpClient
      .post(this.apiUrls.logout, {}, { withCredentials: true })
      .subscribe(() => this.isLoggedInSubject.next(false));
  }
}
