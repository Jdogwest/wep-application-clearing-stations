import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header-landing',
  imports: [],
  templateUrl: './header-landing.component.html',
  styleUrl: './header-landing.component.scss',
})
export class HeaderLandingComponent {
  protected goToLogin() {}
  protected readonly isOpen = signal(false);

  toggleMenu() {
    this.isOpen.set(!this.isOpen());
  }
}
