import { Component } from '@angular/core';
import { UserFormComponent } from '@/main-page/forms/user-form/user-form.component';
import { AddressFormComponent } from '@/main-page/forms/address-form/address-form.component';
import { ServicesFormComponent } from '@/main-page/forms/services-form/services-form.component';

@Component({
  selector: 'app-create-applications-landing',
  imports: [UserFormComponent, AddressFormComponent, ServicesFormComponent],
  templateUrl: './create-applications-landing.component.html',
  styleUrl: './create-applications-landing.component.scss',
})
export class CreateApplicationsLandingComponent {}
