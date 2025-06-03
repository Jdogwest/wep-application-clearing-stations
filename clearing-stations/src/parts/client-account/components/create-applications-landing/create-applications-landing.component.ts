import { Component } from '@angular/core';
import { AddressFormComponent } from '../address-form/address-form.component';
import { UserFormComponent } from '../user-form/user-form.component';
import { ServicesFormComponent } from '../services-form/services-form.component';

@Component({
  selector: 'app-create-applications-landing',
  imports: [
    UserFormComponent,
    AddressFormComponent,
    ServicesFormComponent,
  ],
  templateUrl: './create-applications-landing.component.html',
  styleUrl: './create-applications-landing.component.scss',
})
export class CreateApplicationsLandingComponent {}
