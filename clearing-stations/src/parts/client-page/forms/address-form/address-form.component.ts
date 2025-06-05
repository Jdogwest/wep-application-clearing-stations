import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AddressFormData } from '@/shared/interfaces/address-form.interface';
import { AuthService } from '@/shared/services/auth.service';

type FormControlsOf<T> = {
  [K in keyof T]: FormControl<T[K]>;
};

@Component({
  selector: 'app-address-form',
  imports: [ReactiveFormsModule],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss',
})
export class AddressFormComponent {
  private readonly authService = inject(AuthService);

  protected readonly isEdit = signal(false);

  readonly isLoggedIn = signal(false);

  addressForm = new FormGroup<FormControlsOf<AddressFormData>>({
    city: new FormControl<string>(''),
    street: new FormControl<string>(''),
    house: new FormControl<string>(''),
    septicModel: new FormControl<string>(''),
    septicVolume: new FormControl<number | null>(null),
  });

  ngOnInit() {
    this.addressForm.disable();
  }

  enableEdit() {
    this.isEdit.set(true);
    this.addressForm.enable();
  }

  disableEdit() {
    this.isEdit.set(false);
    this.addressForm.disable();
  }

  onSubmit() {
    if (this.addressForm.valid) {
      console.log(this.addressForm.value);
      this.disableEdit();
    }
  }
}
