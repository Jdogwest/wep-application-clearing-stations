import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { DatePickerModule } from 'primeng/datepicker';
import { ourServicesDescriptions } from '@/main-page/constants/our-services-descriptions';
import { ServicesFormData } from '@/shared/interfaces/services-form.interface';

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
    service: new FormControl<string[]>([], { nonNullable: true }),
    quantity: new FormControl<number | null>(null),
    date: new FormControl<Date | null>(null),
    time: new FormControl<string>(''),
    comment: new FormControl<string>(''),
  });

  selectedServiceId = new FormControl<string>('none');
  showSelect = true;

  busyDates: Date[] = [
    new Date('2025-06-03'),
    new Date('2025-06-04'),
    new Date('2025-06-05'),
  ];

  isDateAvailable = (date: Date): boolean => {
    const dateStr = date.toDateString();
    return !this.busyDates.some((busy) => busy.toDateString() === dateStr);
  };

  get selectedService(): string[] {
    const selectedIds = this.serviceForm.controls.service.value ?? [];
    return this.services
      .filter((service) => selectedIds.includes(String(service.id)))
      .map((service) => service.title);
  }

  addService() {
    const id = this.selectedServiceId.value;
    if (id && id !== 'none') {
      const current = this.serviceForm.controls.service.value ?? [];
      if (!current.includes(id)) {
        this.serviceForm.controls.service.setValue([...current, id]);
      }
      this.selectedServiceId.setValue('none');
      this.showSelect = false;
    }
  }

  showAddSelect() {
    this.showSelect = true;
  }

  removeService(index: number) {
    const current = this.serviceForm.controls.service.value ?? [];
    const updated = [...current];
    updated.splice(index, 1);
    this.serviceForm.controls.service.setValue(updated);
    if (updated.length === 0) {
      this.showSelect = true;
    }
  }

  onSubmit() {
    if (this.serviceForm.valid) {
      console.log(this.serviceForm.value);
    }
  }
}
