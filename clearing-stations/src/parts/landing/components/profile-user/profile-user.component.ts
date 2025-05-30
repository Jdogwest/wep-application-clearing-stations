import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-profile-user',
  imports: [],
  templateUrl: './profile-user.component.html',
  styleUrl: './profile-user.component.scss',
})
export class ProfileUserComponent {
  protected readonly isEdit = signal(false);
  enableEdit() {
    this.isEdit.set(true);
  }
  disableEdit() {
    this.isEdit.set(false);
  }
}
