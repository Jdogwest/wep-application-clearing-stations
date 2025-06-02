import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { finalize } from 'rxjs';
import { registrationFormInterface } from '../../interfaces/auth-form.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-client-auth',
  imports: [ReactiveFormsModule],
  templateUrl: './client-auth.component.html',
  styleUrl: './client-auth.component.scss',
})
export class ClientAuthComponent {
  @Output() close = new EventEmitter<void>();

  private readonly authService = inject(AuthService);

  protected readonly isLogin = signal(true);

  protected readonly loginForm = this.getNewLoginFormGroup();
  protected readonly registrationForm = this.getNewRegistrationFormGroup();

  protected login() {
    this.authService
      .login({
        email: this.loginForm.value.email || '',
        password: this.loginForm.value.password || '',
      })
      .pipe(
        finalize(() => {
          this.close.emit();
        })
      )
      .subscribe({
        error: (err) => console.log(err),
      });
  }

  protected register() {
    this.authService
      .register({
        email: this.registrationForm.value.email || '',
        password: this.registrationForm.value.password || '',
        name: this.registrationForm.value.name || '',
        surname: this.registrationForm.value.surname || '',
      })
      .pipe(
        finalize(() => {
          this.close.emit();
        })
      )
      .subscribe({
        error: (err) => console.log(err),
      });
  }

  protected goToLogin() {
    this.isLogin.set(true);
  }

  protected goToRegister() {
    this.isLogin.set(false);
  }

  private getNewLoginFormGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  private getNewRegistrationFormGroup() {
    return new FormGroup<registrationFormInterface>(
      {
        email: new FormControl<string>('', [
          Validators.email,
          Validators.required,
        ]),
        password: new FormControl('', [Validators.required]),
        repeatPassword: new FormControl('', [Validators.required]),
        surname: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        acceptedAgreement: new FormControl(false, [Validators.requiredTrue]),
      },
      [this.passwordsMatchValidator]
    );
  }

  private passwordsMatchValidator(): (
    control: AbstractControl
  ) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('password')?.value;
      const confirmPassword = control.get('repeatPassword')?.value;

      return password === confirmPassword ? null : { mismatch: true };
    };
  }
}
