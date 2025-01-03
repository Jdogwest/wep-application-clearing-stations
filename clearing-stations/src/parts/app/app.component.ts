import { Component } from '@angular/core';
import { MainLandingComponent } from '../landing/components/main-landing/main-landing.component';

@Component({
  selector: 'app-root',
  imports: [MainLandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'clearing-stations';
}
