import { Component } from '@angular/core';
import { AboutUsComponent } from '../about-us/about-us.component';
import { HeaderLandingComponent } from '../header-landing/header-landing.component';

@Component({
  selector: 'app-main-landing',
  imports: [HeaderLandingComponent, AboutUsComponent],
  templateUrl: './main-landing.component.html',
  styleUrl: './main-landing.component.scss',
})
export class MainLandingComponent {}
