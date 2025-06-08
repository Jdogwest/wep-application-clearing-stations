import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_BE_HOST } from '../../../env';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  private apiUrls = {
    addRequest: API_BE_HOST + 'requests/add/',
  };

  private readonly httpClient = inject(HttpClient);

  addRequest(requestData: {
    planed_start_date: string;
    planed_start_time: string;
    comment: string;
    services: {
      service_id: number;
      amount: number;
    }[];
  }) {
    return this.httpClient.post(this.apiUrls.addRequest, requestData, {
      withCredentials: true,
    });
  }
}
