import { Component, OnInit } from '@angular/core';

import { fakebook } from '../shared/fakebook.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
smapleFakebook:fakebook[]=[];

  ngOnInit(): void {
  //  console.log(this.smapleFakebook);
  
 
 //    this.FakebookServ.upsertContact(smapleFakebook)
  }

  
}
