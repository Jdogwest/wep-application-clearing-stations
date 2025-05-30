import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-profile-address',
  imports: [],
  templateUrl: './profile-address.component.html',
  styleUrl: './profile-address.component.scss',
})
export class ProfileAddressComponent {
  protected readonly isEdit = signal(false);
  enableEdit() {
    this.isEdit.set(true);
  }
  disableEdit() {
    this.isEdit.set(false);
  }
}
