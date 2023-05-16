import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FakebookService } from 'src/app/shared/fakebook.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-forms',
  templateUrl: './login-forms.component.html',
  styleUrls: ['./login-forms.component.css'],
})
export class LoginFormsComponent {
  loginForms: FormGroup;

  validators(email: string, Password: string) {
    this.loginForms = this.formBuilder.group({
      userData: new FormGroup({
        Email: new FormControl(email, [Validators.email, Validators.required]),
        Password: new FormControl(Password, [
          Validators.required,
          Validators.pattern('^[0-9-a-zA-Z_._ ]{8,50}$'),
        ]),
      }),
    });
  }

  onSubmit() {
   // this.FakebookServ.SignUp("jomer@gmail.com","sasasasa")




    this.FakebookServ.signIn({
      email: this.loginForms.value.userData.Email,
      password: this.loginForms.value.userData.Password,
    }).subscribe({
      next: () => this.router.navigate(['home']),
      error: (error) => {
        console.log(error)
        // this.isLoggingIn = false;
        // this.snackBar.open(error.message, 'OK', {
        //   duration: 5000,
        // });
      },
    });
  }

  constructor(
    private formBuilder: FormBuilder,
    private FakebookServ: FakebookService,
    private router: Router
  ) {
    this.validators(null, null);
  }
}
