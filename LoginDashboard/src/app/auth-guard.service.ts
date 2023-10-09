// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }
  isAuthenticated = false


  login(formData: Object) {
    this.http.post(`http://localhost:8080/user`, formData).subscribe(
      (response) => {
        if (response) {
          console.log('API Response:', response);
          this.isAuthenticated = true
          localStorage.setItem('userData', JSON.stringify(response));
          alert('Sign in Successfully !!')
          this.router.navigate(['/']);
        }


      },
      (error) => {
        console.error('API Error:', error);

      }
    );

  }
}
