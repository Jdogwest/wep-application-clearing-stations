import { Routes } from '@angular/router';
import { ClientLoginComponent } from '../landing/components/client-login/client-login.component';
import { MainLandingComponent } from '../landing/components/main-landing/main-landing.component';

export const routes: Routes = [
  { path: '', component: MainLandingComponent },
  { path: 'login', component: ClientLoginComponent },
];
