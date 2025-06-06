import { AuthService } from '@/shared/services/auth.service';
import { NotificationService } from '@/shared/services/notification.service';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar-landing',
  imports: [RouterLink],
  templateUrl: './sidebar-landing.component.html',
  styleUrl: './sidebar-landing.component.scss',
})
export class SidebarLandingComponent {
  private readonly authService = inject(AuthService);

  private notificationService = inject(NotificationService);

  private router = inject(Router);

  logout() {
    this.authService.logout().subscribe({
      next: (res: any) => {
        this.notificationService.success(
          res?.detail || 'Выход выполнен успешно'
        );
        this.router.navigate(['']);
      },
      error: (err) => {
        this.notificationService.error(err?.error?.detail || 'Ошибка выхода');
      },
    });
  }
}
