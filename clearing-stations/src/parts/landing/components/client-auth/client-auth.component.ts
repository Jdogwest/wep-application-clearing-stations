import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-client-auth',
  imports: [],
  templateUrl: './client-auth.component.html',
  styleUrl: './client-auth.component.scss',
})
export class ClientAuthComponent {
  protected readonly isLogin = signal(false);
  goToLogin() {
    this.isLogin.set(true);
  }
  goToRegister() {
    this.isLogin.set(false);
  }
}
