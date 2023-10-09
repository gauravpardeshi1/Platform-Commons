import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isAuthenticated: boolean = false;
  constructor() {
    const userData = localStorage.getItem('userData');
    if (userData) {
      this.isAuthenticated = true;
    }
  }

  logout() {
    localStorage.removeItem('userData');
    this.isAuthenticated = false;
  }
}
