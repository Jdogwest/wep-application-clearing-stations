import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_BE_HOST } from '../../../../env';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrls = {
    login: API_BE_HOST + 'auth/login/',
    register: API_BE_HOST + 'auth/register/',
  };

  private readonly httpClient = inject(HttpClient);

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
    return this.httpClient.post(this.apiUrls.login, payload, {
      withCredentials: true,
    });
  }
}
