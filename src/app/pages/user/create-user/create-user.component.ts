import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateExamUser } from 'src/app/model/CreateExamUser';
import { ExamUser } from 'src/app/model/examUser';
import { LoginService } from 'src/app/service/auth/login.service';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  registerForm = this.fb.group({

    name:[''],
    country:[''],
    email: [''],
    password: [''],
    rePassword: ['']

  })

  loading:boolean = false;

  constructor(private fb:FormBuilder,
              private loginService:LoginService,
              private state:StateService,
              private router:Router) { }

  ngOnInit(): void {
  }

  createUser()
  {
    this.loading = true;
    let user:CreateExamUser = new CreateExamUser();
    user.name = this.registerForm.value.name;
    user.email = this.registerForm.value.email;
    user.country = this.registerForm.value.country;
    user.password = this.registerForm.value.password;
    user.roles = "USER";
    this.loginService.createUser(user).subscribe((user)=>{
      
      let newUser:ExamUser = user.cugExamUser;
      newUser.jwt = user.jwt;
      this.state.setExamUser(newUser);
      this.loading = false;
      this.router.navigate(['exam']);
    },
    (error)=>{
      console.log(error);
    })
  }

  

}
