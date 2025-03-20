import { Component } from '@angular/core';
import { HeaderLandingComponent } from '../header-landing/header-landing.component';
import { PreviewBlockComponent } from '../preview-block/preview-block.component';

@Component({
  selector: 'app-main-landing',
  imports: [HeaderLandingComponent, PreviewBlockComponent],
  templateUrl: './main-landing.component.html',
  styleUrl: './main-landing.component.scss',
})
export class MainLandingComponent {}
