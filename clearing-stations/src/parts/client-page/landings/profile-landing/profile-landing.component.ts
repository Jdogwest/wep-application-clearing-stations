import { Component } from '@angular/core';
import { UserFormComponent } from '@/main-page/forms/user-form/user-form.component';
import { AddressFormComponent } from '@/main-page/forms/address-form/address-form.component';

@Component({
  selector: 'app-profile-landing',
  imports: [UserFormComponent, AddressFormComponent],
  templateUrl: './profile-landing.component.html',
  styleUrl: './profile-landing.component.scss',
})
export class ProfileLandingComponent {}
