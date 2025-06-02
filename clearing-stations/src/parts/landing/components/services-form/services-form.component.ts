import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServicesFormData } from '../../interfaces/services-form.interface';
import { ourServicesDescriptions } from '../../constants/our-services-descriptions';
import { DatePickerModule } from 'primeng/datepicker';

type FormControlsOf<T> = {
  [K in keyof T]: FormControl<T[K]>;
};

@Component({
  selector: 'app-services-form',
  imports: [CommonModule, ReactiveFormsModule, DatePickerModule],
  templateUrl: './services-form.component.html',
  styleUrl: './services-form.component.scss',
})
export class ServicesFormComponent {
  services = ourServicesDescriptions;
  serviceForm = new FormGroup<FormControlsOf<ServicesFormData>>({
    service: new FormControl<string>('none'),
    date: new FormControl<Date | null>(null),
    time: new FormControl<string>(''),
    comment: new FormControl<string>(''),
  });

  busyDates: Date[] = [
    new Date('2025-06-03'),
    new Date('2025-06-04'),
    new Date('2025-06-05'),
  ];

  isDateAvailable = (date: Date): boolean => {
    const dateStr = date.toDateString();
    return !this.busyDates.some((busy) => busy.toDateString() === dateStr);
  };
  onSubmit() {
    if (this.serviceForm.valid) {
      console.log(this.serviceForm.value);
    }
  }
}
