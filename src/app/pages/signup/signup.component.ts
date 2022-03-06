import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private auth: AuthService, private router: Router) {
    if (localStorage.getItem('user_email')) {
      this.router.navigate(['/home']);
    }
  }

  userRegister(): void {
    this.isLoading = true;
    this.auth
      .registerWithEmail(this.email, this.password)
      .then(() => {
        localStorage.setItem('user_email', this.auth.userInfo?.user.email);
        this.router.navigate(['/home']);
      })
      .catch((e: any) => {
        this.errorMessage = e;
        this.isLoading = false;
      });
  }

  clearErrorMessage(): void {
    this.errorMessage = '';
  }

  ngOnInit(): void {}
}
