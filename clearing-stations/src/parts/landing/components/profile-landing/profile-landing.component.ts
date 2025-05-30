import { Component } from '@angular/core';
import { HeaderLandingComponent } from '../header-landing/header-landing.component';
import { FooterLandingComponent } from '../footer-landing/footer-landing.component';
import { ProfileUserComponent } from '../profile-user/profile-user.component';
import { ProfileAddressComponent } from '../profile-address/profile-address.component';

@Component({
  selector: 'app-profile-landing',
  imports: [
    HeaderLandingComponent,
    FooterLandingComponent,
    ProfileUserComponent,
    ProfileAddressComponent,
  ],
  templateUrl: './profile-landing.component.html',
  styleUrl: './profile-landing.component.scss',
})
export class ProfileLandingComponent {}
