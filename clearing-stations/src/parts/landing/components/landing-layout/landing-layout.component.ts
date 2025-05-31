import { Component, signal } from '@angular/core';
import { HeaderLandingComponent } from '../header-landing/header-landing.component';
import { FooterLandingComponent } from '../footer-landing/footer-landing.component';
import { ClientAuthComponent } from '../client-auth/client-auth.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing-layout',
  imports: [
    HeaderLandingComponent,
    FooterLandingComponent,
    ClientAuthComponent,
    RouterOutlet,
  ],
  templateUrl: './landing-layout.component.html',
  styleUrl: './landing-layout.component.scss',
})
export class LandingLayoutComponent {
  protected readonly showAuth = signal(false);
  openAuth() {
    this.showAuth.set(true);
    document.body.classList.add('modal-open');
  }

  closeAuth() {
    this.showAuth.set(false);
    document.body.classList.remove('modal-open');
  }
}
