import { MyRequest } from '@/shared/interfaces/my-request.interface';
import { RequestsService } from '@/shared/services/requests.service';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-requests-landing',
  imports: [RouterLink],
  templateUrl: './requests-landing.component.html',
  styleUrl: './requests-landing.component.scss',
})
export class RequestsLandingComponent {
  requests: MyRequest[] = [];
  private readonly requestsService = inject(RequestsService);

  statusMap: Record<string, string> = {
    new: 'Новая',
    in_work: 'В работе',
    complete: 'Завершена',
    cancelled: 'Отменена',
  };

  ngOnInit(): void {
    this.requestsService.getAllRequests().subscribe({
      next: (data) => {
        this.requests = data as MyRequest[];
      },
      error: (err) => {
        console.error('Ошибка при получении заявок', err);
      },
    });
  }
}
