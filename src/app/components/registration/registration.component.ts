import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  errors: string = 'Password Mismatch';
  constructor(
    private storageService: StorageService,
    private router: Router,
    private toast: NgToastService
  ) {}
  regForm = new FormGroup({
    userType: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });
  onSubmit() {
    // console.log(this.regForm.value);
  }

  get firstName() {
    // console.log(this.firstName);

    return this.regForm.get('firstName');
  }
  get lastName() {
    return this.regForm.get('lastName');
  }
  get email() {
    return this.regForm.get('email');
  }
  get phoneNumber() {
    return this.regForm.get('phoneNumber');
  }
  get userType() {
    return this.regForm.get('userType');
  }
  get password() {
    return this.regForm.get('password');
  }
  get confirmPassword() {
    return this.regForm.get('confirmPassword');
  }

  registerUser(): void {
    let users: User[] = this.storageService.getAllUsers();
    let tempReg: User = { ...this.regForm.value, id: users.length + 1 } as User;
    this.openSuccess();
    this.router.navigate(['/login'], { replaceUrl: true });
    this.storageService.registerUser(tempReg);
  }
  openSuccess(): void {
    this.toast.success({
      detail: 'Registered User Successfully',
      summary: 'Welcome to SSS Shopping',
      duration: 2000,
    });
  }
}
