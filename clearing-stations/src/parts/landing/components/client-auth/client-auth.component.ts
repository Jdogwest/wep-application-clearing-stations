import { Component, EventEmitter, Output, signal } from '@angular/core';

@Component({
  selector: 'app-client-auth',
  imports: [],
  templateUrl: './client-auth.component.html',
  styleUrl: './client-auth.component.scss',
})
export class ClientAuthComponent {
  @Output() close = new EventEmitter<void>();
  protected readonly isLogin = signal(false);
  goToLogin() {
    this.isLogin.set(true);
  }
  goToRegister() {
    this.isLogin.set(false);
  }
}
