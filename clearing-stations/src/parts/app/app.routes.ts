import { Routes } from '@angular/router';
import { ClientAuthComponent } from '../landing/components/client-auth/client-auth.component';
import { MainLandingComponent } from '../landing/components/main-landing/main-landing.component';
import { ProfileLandingComponent } from '../landing/components/profile-landing/profile-landing.component';

export const routes: Routes = [
  { path: '', component: MainLandingComponent },
  { path: 'login', component: ClientAuthComponent },
  { path: 'profile', component: ProfileLandingComponent },
];
