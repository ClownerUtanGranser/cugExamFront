import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Authentication } from 'src/app/model/authentication';
import { LoginService } from 'src/app/service/auth/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({

    Email: [''],
    password: ['']

  })

  loading:boolean = false;
  showError:boolean = false;

  constructor(private fb:FormBuilder,
              private loginService:LoginService,
              private router:Router) { }

  ngOnInit(): void {
  }

  login():void
  {
    this.loading = true;
    this.showError = false;
    let authLogin = new Authentication();

    authLogin.userEmail = this.loginForm.value.Email;
    authLogin.password = this.loginForm.value.password;
    
    this.loginService.httpLogin(authLogin).subscribe((jwt)=>{
      this.loginService.httpGetUserAndSetState(authLogin.userEmail, jwt.jwt);
      this.router.navigate(['exam']);
      this.loading = false;
    },
    (error)=>{
      console.log(error);
      this.loading = false;
      this.showError = true;
    })
  }

}
