import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private storageService: StorageService,
    private authService: AuthService
  ) {}
  title = 'Angular-E-Commerce';
  ngOnInit(): void {
    this.storageService.loadUsers();
  }
  isLoggedIn():boolean {
    return this.authService.isLoggedIn();
  }
}
