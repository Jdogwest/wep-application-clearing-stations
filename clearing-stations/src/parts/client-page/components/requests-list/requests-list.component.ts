import { MyRequest } from '@/shared/interfaces/my-request.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-requests-list',
  imports: [],
  templateUrl: './requests-list.component.html',
  styleUrl: './requests-list.component.scss',
})
export class RequestsListComponent {
  @Input() requests: MyRequest[] = [];
  statusMap: Record<string, string> = {
    new: 'Новая',
    in_work: 'В работе',
    complete: 'Завершена',
    cancelled: 'Отменена',
  };
}
