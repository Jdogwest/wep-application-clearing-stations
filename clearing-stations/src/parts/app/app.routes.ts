import { Routes } from '@angular/router';
import { CreateApplicationsLandingComponent } from '../client-account/components/create-applications-landing/create-applications-landing.component';
import { ProfileLandingComponent } from '../client-account/components/profile-landing/profile-landing.component';
import { RequestEditComponent } from '../manager-page/components/request-edit/request-edit.component';
import { RequestsLandingComponent } from '../manager-page/components/requests-landing/requests-landing.component';
import { LandingLayoutComponent } from '../landing/components/landing-layout/landing-layout.component';
import { MainLandingComponent } from '../landing/components/main-landing/main-landing.component';
import { TeamsLandingComponent } from '../manager-page/components/teams-landing/teams-landing.component';
import { UsersLandingComponent } from '../manager-page/components/users-landing/users-landing.component';
import { AdminLayoutComponent } from '../manager-page/admin-layout/admin-layout.component';
import { UserEditComponent } from '../manager-page/components/user-edit/user-edit.component';

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
      {
        path: 'user-edit/:id',
        component: UserEditComponent,
      },
    ],
  },
];
