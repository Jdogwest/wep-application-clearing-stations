import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { ourServicesDescriptions } from '@/main-page/constants/our-services-descriptions';
import { ServicesFormData } from '@/shared/interfaces/services-form.interface';
import { ServiceService } from '@/shared/services/services.service';
import { Service } from '@/shared/interfaces/Service.interface';

type FormControlsOf<T> = {
  [K in keyof T]: FormControl<T[K]>;
};

@Component({
  selector: 'app-services-form',
  imports: [CommonModule, ReactiveFormsModule, CalendarModule],
  templateUrl: './services-form.component.html',
  styleUrl: './services-form.component.scss',
})
export class ServicesFormComponent {
  services: Service[] = [];
  private readonly serviceService = inject(ServiceService);

  ngOnInit() {
    this.loadServices();
  }

  loadServices() {
    this.serviceService.getAllServices().subscribe(
      (data) => {
        this.services = data as Service[];
        console.log(this.services);
      },
      (err) => {
        console.error('Ошибка при получении услуг:', err);
      }
    );
  }

  serviceForm = new FormGroup<FormControlsOf<ServicesFormData>>({
    service: new FormControl<{ id: string; quantity: number }[]>([], {
      nonNullable: true,
    }),

    quantity: new FormControl<number | null>(null),
    date: new FormControl<Date | null>(null),
    time: new FormControl<string>(''),
    comment: new FormControl<string>(''),
  });

  selectedServiceId = new FormControl<string>('none');

  showSelect = true;

  today: Date = new Date();

  busyDates: Date[] = [
    new Date('2025-06-07'),
    new Date('2025-06-08'),
    new Date('2025-06-09'),
  ];

  isDateAvailable = (date: Date): boolean => {
    const dateStr = date.toDateString();
    return !this.busyDates.some((busy) => busy.toDateString() === dateStr);
  };

  get selectedService(): (Service & { quantity: number })[] {
    const selected = this.serviceForm.controls.service.value ?? [];
    return selected
      .map((s) => {
        const service = this.services.find((srv) => String(srv.id) === s.id);
        return service ? { ...service, quantity: s.quantity } : null;
      })
      .filter((s): s is Service & { quantity: number } => s !== null);
  }

  addService() {
    const id = this.selectedServiceId.value;
    if (id && id !== 'none') {
      const current = this.serviceForm.controls.service.value ?? [];
      const existingIndex = current.findIndex((s) => s.id === id);

      if (existingIndex !== -1) {
        const updated = [...current];
        updated[existingIndex].quantity += 1;
        this.serviceForm.controls.service.setValue(updated);
      } else {
        this.serviceForm.controls.service.setValue([
          ...current,
          { id, quantity: 1 },
        ]);
      }

      this.selectedServiceId.setValue('none');
      this.showSelect = false;
    }
  }

  increaseQuantity(index: number) {
    const current = this.serviceForm.controls.service.value ?? [];
    const updated = current.map((item, i) =>
      i === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    this.serviceForm.controls.service.setValue(updated);
  }

  decreaseQuantity(index: number) {
    const current = this.serviceForm.controls.service.value ?? [];
    const updated = [...current];

    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
    } else {
      updated.splice(index, 1);
      if (updated.length === 0) {
        this.showSelect = true;
      }
    }

    this.serviceForm.controls.service.setValue(updated);
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
