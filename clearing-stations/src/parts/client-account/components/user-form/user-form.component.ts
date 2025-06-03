import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserFormData } from '../../interfaces/user-form.interface';

type FormControlsOf<T> = {
  [K in keyof T]: FormControl<T[K]>;
};

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent {
  protected readonly isEdit = signal(false);

  userForm = new FormGroup<FormControlsOf<UserFormData>>({
    surname: new FormControl<string>(''),
    name: new FormControl<string>(''),
    patronymic: new FormControl<string>(''),
    email: new FormControl<string>(''),
    phone: new FormControl<string>(''),
  });

  ngOnInit() {
    this.userForm.disable();
  }

  enableEdit() {
    this.isEdit.set(true);
    this.userForm.enable();
  }

  disableEdit() {
    this.isEdit.set(false);
    this.userForm.disable();
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.disableEdit();
    }
  }
}
