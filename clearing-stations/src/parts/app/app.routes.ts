import { Routes } from '@angular/router';
import { ClientLoginComponent } from '../landing/components/client-auth/client-auth.component';
import { MainLandingComponent } from '../landing/components/main-landing/main-landing.component';

export const routes: Routes = [
  { path: '', component: MainLandingComponent },
  { path: 'login', component: ClientLoginComponent },
];
