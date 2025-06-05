import { Component, OnInit } from '@angular/core';
import { UsershService } from '../../../landing/services/users.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users-landing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './users-landing.component.html',
  styleUrls: ['./users-landing.component.scss'],
})
export class UsersLandingComponent implements OnInit {
  users: any[] = [];
  selectedUser: any = null;

  constructor(private usersService: UsershService) {}

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe({
      next: (data: any) => {
        this.users = data;
      },
      error: (err) => {
        console.error('Ошибка при получении пользователей', err);
      },
    });
  }
}
