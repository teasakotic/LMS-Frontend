import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.username.hasError('required') && this.password.hasError('required')) {
      return 'You must enter a value';
    }

    return this.username.hasError('email') ? 'Not valid username' : '' &&  this.username.hasError('email') ? 'Not valid password' : '';
  }

}
