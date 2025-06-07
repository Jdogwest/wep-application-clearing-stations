import { CallRequestsService } from '@/shared/services/call-requests.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-requests',
  imports: [],
  templateUrl: './call-requests-landing.component.html',
  styleUrl: './call-requests-landing.component.scss',
})
export class CallRequestsLandingComponent implements OnInit {
  callRequests: any[] = [];

  constructor(private callRequestsService: CallRequestsService) {}

  ngOnInit(): void {
    this.callRequestsService.getCallRequests().subscribe({
      next: (data: any) => {
        this.callRequests = data;
      },
      error: (error) => {
        console.error('Ошибка при получении заявок:', error);
      },
    });
  }
}
