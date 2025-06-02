import { Routes } from '@angular/router';
import { ClientAuthComponent } from '../landing/components/client-auth/client-auth.component';
import { MainLandingComponent } from '../landing/components/main-landing/main-landing.component';
import { ProfileLandingComponent } from '../landing/components/profile-landing/profile-landing.component';
import { CreateApplicationsLandingComponent } from '../landing/components/create-applications-landing/create-applications-landing.component';
import { LandingLayoutComponent } from '../landing/components/landing-layout/landing-layout.component';
import { AdminLayoutComponent } from '../landing/components/admin-layout/admin-layout.component';
import { RequestsLandingComponent } from '../landing/components/requests-landing/requests-landing.component';
import { UsersLandingComponent } from '../landing/components/users-landing/users-landing.component';
import { TeamsLandingComponent } from '../landing/components/teams-landing/teams-landing.component';
import { RequestEditComponent } from '../landing/components/request-edit/request-edit.component';

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
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'requests',
        component: RequestsLandingComponent,
      },
      {
        path: 'users',
        component: UsersLandingComponent,
      },
      {
        path: 'teams',
        component: TeamsLandingComponent,
      },
      {
        path: 'request-edit/:id',
        component: RequestEditComponent,
      },
    ],
  },
];
