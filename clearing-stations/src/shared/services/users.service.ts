import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_BE_HOST } from '../../../env';
import { UserFormData } from '@/shared/interfaces/user-form.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsershService {
  private apiUrls = {
    allUsers: API_BE_HOST + 'users/all_users/',
    userById: (id: number) => API_BE_HOST + `users/${id}/`,
    editUser: API_BE_HOST + 'users/edit-user/',
    getAllClients: API_BE_HOST + 'users/all_clients/',
  };

  private readonly httpClient = inject(HttpClient);

  getAllUsers() {
    return this.httpClient.get(this.apiUrls.allUsers, {
      withCredentials: true,
    });
  }

  getAllClients() {
    return this.httpClient.get(this.apiUrls.getAllClients, {
      withCredentials: true,
    });
  }

  getUserById(id: number) {
    return this.httpClient.get(this.apiUrls.userById(id), {
      params: { user_id: id.toString() },
      withCredentials: true,
    });
  }

  editUser(userData: UserFormData): Observable<any> {
    return this.httpClient.post(this.apiUrls.editUser, userData, {
      withCredentials: true,
    });
  }
}
