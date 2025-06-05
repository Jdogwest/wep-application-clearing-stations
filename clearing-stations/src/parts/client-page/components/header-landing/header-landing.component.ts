import { Component, EventEmitter, Output, inject, signal } from '@angular/core';
import { AuthService } from '@/shared/services/auth.service';
import { RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-header-landing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header-landing.component.html',
  styleUrl: './header-landing.component.scss',
})
export class HeaderLandingComponent {
  @Output() loginClick = new EventEmitter<void>();

  private readonly authService = inject(AuthService);

  protected readonly isOpen = signal(false);
  protected readonly isLoggedIn = signal(false);

  constructor() {
    this.authService.checkAuth();
    this.authService.isLoggedIn$
      .pipe(takeUntilDestroyed())
      .subscribe((loggedIn) => this.isLoggedIn.set(loggedIn));
  }

  toggleMenu() {
    this.isOpen.set(!this.isOpen());
  }

  logout() {
    this.authService.logout();
  }
}
