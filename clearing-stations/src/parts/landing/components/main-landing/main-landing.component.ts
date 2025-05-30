import { Component, signal } from '@angular/core';
import { AboutUsComponent } from '../about-us/about-us.component';
import { HeaderLandingComponent } from '../header-landing/header-landing.component';
import { PreviewBlockComponent } from '../preview-block/preview-block.component';
import { WhyUsComponent } from '../why-us/why-us.component';
import { OurServicesComponent } from '../our-services/our-services.component';
import { ExamplesOfWorksComponent } from '../examples-of-works/examples-of-works.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { FooterLandingComponent } from '../footer-landing/footer-landing.component';
import { ClientAuthComponent } from '../client-auth/client-auth.component';

@Component({
  selector: 'app-main-landing',
  imports: [
    HeaderLandingComponent,
    PreviewBlockComponent,
    AboutUsComponent,
    WhyUsComponent,
    OurServicesComponent,
    ExamplesOfWorksComponent,
    ContactsComponent,
    ContactFormComponent,
    FooterLandingComponent,
    ClientAuthComponent,
  ],
  templateUrl: './main-landing.component.html',
  styleUrl: './main-landing.component.scss',
})
export class MainLandingComponent {
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
