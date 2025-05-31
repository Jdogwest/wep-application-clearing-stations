import { Component, signal } from '@angular/core';
import { AboutUsComponent } from '../about-us/about-us.component';
import { PreviewBlockComponent } from '../preview-block/preview-block.component';
import { WhyUsComponent } from '../why-us/why-us.component';
import { OurServicesComponent } from '../our-services/our-services.component';
import { ExamplesOfWorksComponent } from '../examples-of-works/examples-of-works.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-main-landing',
  imports: [
    PreviewBlockComponent,
    AboutUsComponent,
    WhyUsComponent,
    OurServicesComponent,
    ExamplesOfWorksComponent,
    ContactsComponent,
    ContactFormComponent,
  ],
  templateUrl: './main-landing.component.html',
  styleUrl: './main-landing.component.scss',
})
export class MainLandingComponent {}
