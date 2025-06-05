import { Component, inject, signal } from '@angular/core';
import { UserFormComponent } from '@/main-page/forms/user-form/user-form.component';
import { AddressFormComponent } from '@/main-page/forms/address-form/address-form.component';
import { ServicesFormComponent } from '@/main-page/forms/services-form/services-form.component';
import { AuthService } from '@/shared/services/auth.service';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-create-applications-landing',
  imports: [UserFormComponent, AddressFormComponent, ServicesFormComponent],
  templateUrl: './create-applications-landing.component.html',
  styleUrl: './create-applications-landing.component.scss',
})
export class CreateApplicationsLandingComponent {
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
