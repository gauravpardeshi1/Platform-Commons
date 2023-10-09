import { Component } from '@angular/core';
import { AuthService } from '../../auth-guard.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService) { }

  formData: any = {};

  onSubmit() {
    //console.log('Form Data:', this.formData);
    this.authService.login(this.formData)

  }
}
