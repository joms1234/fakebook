import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './login-page/register-page/register-page.component';
import { LoginFormsComponent } from './login-page/login-forms/login-forms.component';
import { FakebookService } from './shared/fakebook.service';
import { AngularFireModule } from  '@angular/fire/compat';
import { AngularFireAuthModule } from  '@angular/fire/compat/auth';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    LoginFormsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyB1nPsC8FCQSNYmC5eA5CmDMJsvIFoPZCc",
        authDomain: "fakebook-da0ee.firebaseapp.com",
        projectId: "fakebook-da0ee",
        storageBucket: "fakebook-da0ee.appspot.com",
        messagingSenderId: "60427364551",
        appId: "1:60427364551:web:94ef042d51b6df7f4c36e2",
        measurementId: "G-SQZ9NV677F"
      }
    ),
    AngularFireAuthModule
  ],
  providers: [FakebookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
