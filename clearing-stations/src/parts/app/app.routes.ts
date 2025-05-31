import { Routes } from '@angular/router';
import { ClientAuthComponent } from '../landing/components/client-auth/client-auth.component';
import { MainLandingComponent } from '../landing/components/main-landing/main-landing.component';
import { ProfileLandingComponent } from '../landing/components/profile-landing/profile-landing.component';
import { CreateApplicationsLandingComponent } from '../landing/components/create-applications-landing/create-applications-landing.component';
import { LandingLayoutComponent } from '../landing/components/landing-layout/landing-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingLayoutComponent,
    children: [
      {
        path: '',
        component: MainLandingComponent,
      },
      {
        path: 'profile',
        component: ProfileLandingComponent,
      },
      {
        path: 'create-application',
        component: CreateApplicationsLandingComponent,
      },
    ],
  },
];
