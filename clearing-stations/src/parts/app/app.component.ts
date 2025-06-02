import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotificationComponent } from '../landing/components/notification/notification.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, NotificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'clearing-stations';

  httpClient = inject(HttpClient);

  ngOnInit() {
    this.httpClient
      .get('http://localhost:8000/users/me/', { withCredentials: true })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
