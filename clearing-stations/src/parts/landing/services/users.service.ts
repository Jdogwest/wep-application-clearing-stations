import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_BE_HOST } from '../../../../env';

@Injectable({
  providedIn: 'root',
})
export class UsershService {
  private apiUrls = {
    allUsers: API_BE_HOST + 'users/all_users/',
    userById: (id: number) => API_BE_HOST + `users/${id}/`,
  };

  private readonly httpClient = inject(HttpClient);

  getAllUsers() {
    return this.httpClient.get(this.apiUrls.allUsers, {
      withCredentials: true,
    });
  }

  getUserById(id: number) {
    return this.httpClient.get(this.apiUrls.userById(id), {
      params: { user_id: id.toString() },
      withCredentials: true,
    });
  }
}
