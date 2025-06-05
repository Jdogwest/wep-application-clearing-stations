import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserFormComponent } from '@/main-page/forms/user-form/user-form.component';
import { AddressFormComponent } from '@/main-page/forms/address-form/address-form.component';
import { AuthService } from '@/shared/services/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { signal } from '@angular/core';

@Component({
  selector: 'app-profile-landing',
  standalone: true,
  imports: [UserFormComponent, AddressFormComponent],
  templateUrl: './profile-landing.component.html',
  styleUrl: './profile-landing.component.scss',
})
export class ProfileLandingComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly isLoggedIn = signal(false);

  constructor() {
    this.authService.checkAuth();

    this.authService.isLoggedIn$
      .pipe(takeUntilDestroyed())
      .subscribe((loggedIn) => {
        this.isLoggedIn.set(loggedIn);

        if (!loggedIn) {
          this.router.navigate(['']);
        }
      });
  }
}
