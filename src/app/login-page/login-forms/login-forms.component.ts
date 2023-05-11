import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login-forms',
  templateUrl: './login-forms.component.html',
  styleUrls: ['./login-forms.component.css']
})

export class LoginFormsComponent {
  loginForms: FormGroup;

  validators(email: string, Password: string) {
    this.loginForms = this.formBuilder.group({
      userData: new FormGroup({
        Email: new FormControl(email, [Validators.email, Validators.required]),
        Password: new FormControl(Password, [
          Validators.required,
          Validators.pattern('^[a-zA-Z_._ ]{8,50}$'),
        ]),
      }),
    });
  }

  onSubmit() {

  }

  constructor(private formBuilder: FormBuilder) {
    this.validators(null, null);
  }
}
