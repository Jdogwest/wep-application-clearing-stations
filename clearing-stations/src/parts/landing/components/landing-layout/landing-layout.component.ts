import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientAuthComponent } from '../../../client-account/components/client-auth/client-auth.component';
import { FooterLandingComponent } from '../footer-landing/footer-landing.component';
import { HeaderLandingComponent } from '../header-landing/header-landing.component';

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
