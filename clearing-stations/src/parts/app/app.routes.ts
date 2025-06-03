import { Routes } from '@angular/router';
import { CreateApplicationsLandingComponent } from '../client-account/components/create-applications-landing/create-applications-landing.component';
import { ProfileLandingComponent } from '../client-account/components/profile-landing/profile-landing.component';
import { RequestEditComponent } from '../client-account/components/request-edit/request-edit.component';
import { RequestsLandingComponent } from '../client-account/components/requests-landing/requests-landing.component';
import { LandingLayoutComponent } from '../landing/components/landing-layout/landing-layout.component';
import { MainLandingComponent } from '../landing/components/main-landing/main-landing.component';
import { TeamsLandingComponent } from '../landing/components/teams-landing/teams-landing.component';
import { UsersLandingComponent } from '../landing/components/users-landing/users-landing.component';
import { AdminLayoutComponent } from '../manager-page/components/admin-layout/admin-layout.component';

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
