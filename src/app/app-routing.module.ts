import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormsComponent } from './login-page/login-forms/login-forms.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './login-page/register-page/register-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch: 'full'},
  {
    path: 'login',
    component: LoginPageComponent,
    children: [
      { path: '', component: LoginFormsComponent },
      { path: 'register', component: RegisterPageComponent },
    ],
  },
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
