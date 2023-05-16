import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { fakebook } from 'src/app/shared/fakebook.model';
import { FakebookService } from 'src/app/shared/fakebook.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent {
  RegisterForms: FormGroup;

  validators(name:string, email: string, Password: string, ConfirmPass:string) {
    this.RegisterForms = this.formBuilder.group({
      userData: new FormGroup({
        Name: new FormControl(name, Validators.required),
        Email: new FormControl(email, [Validators.email, Validators.required]),
        Password: new FormControl(Password, [
          Validators.required,
          Validators.pattern('^[0-9-a-zA-Z_._ ]{8,50}$'),
        ]),
        ConfirmPassword: new FormControl(ConfirmPass, [
          Validators.required,
          Validators.pattern('^[0-9-a-zA-Z_._ ]{8,50}$'),
        ]),
      }),
    });
  }
  onRegSubmit() { 

    const userCredential: fakebook = {
      name: this.RegisterForms.value.userData.Name,
      email: this.RegisterForms.value.userData.Email,
      password: this.RegisterForms.value.userData.Password,
      confirm_password: this.RegisterForms.value.ConfirmPassword
    };


    this.FakebookServ.SignUp(userCredential);
  }

  constructor(
    private formBuilder: FormBuilder,
    private FakebookServ: FakebookService
  ) {
    this.validators(null,null,null,null)
  }
}
