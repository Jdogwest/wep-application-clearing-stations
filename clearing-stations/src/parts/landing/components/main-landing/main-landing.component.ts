import { Component } from '@angular/core';
import { AboutUsComponent } from '../about-us/about-us.component';
import { HeaderLandingComponent } from '../header-landing/header-landing.component';
import { PreviewBlockComponent } from '../preview-block/preview-block.component';
import { WhyUsComponent } from '../why-us/why-us.component';

@Component({
  selector: 'app-main-landing',
  imports: [
    HeaderLandingComponent,
    PreviewBlockComponent,
    AboutUsComponent,
    WhyUsComponent,
  ],
  templateUrl: './main-landing.component.html',
  styleUrl: './main-landing.component.scss',
})
export class MainLandingComponent {}
