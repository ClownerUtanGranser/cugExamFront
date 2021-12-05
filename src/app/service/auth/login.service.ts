import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Authentication } from 'src/app/model/authentication';
import { HttpHeader } from 'src/app/model/header';
import { StateService } from '../state.service';
import { ExamUser } from 'src/app/model/examUser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrlAuth = "http://localhost:8081/v1/auth";
  private baseUrlUser = "http://localhost:8081/v1/user";

  constructor(private http:HttpClient,
              private state:StateService,
              private router:Router
              ) { }

  httpLogin(body:Authentication):Observable<{jwt:string}>
  {
    return this.http.post<{jwt:string}>(`${this.baseUrlAuth}/login`,body);
  }

  httpGetUserAndSetState(email:string, jwt:string):void
  {
    this.http.get(`${this.baseUrlUser}/${email}`, new HttpHeader(jwt).getHeader())
      .subscribe((user:ExamUser)=>{
        user.jwt = jwt;
        //Set user
        const examUser:ExamUser = new ExamUser();
        examUser.name = user.name;
        examUser.email = user.email;
        examUser.examsTaken = user.examsTaken
        examUser.jwt = jwt; 
        examUser.country = user.country
        examUser.roles = user.roles;

        this.state.setExamUser(user);
        this.setToSessionStorage( user.jwt, JSON.stringify(examUser));
        user.roles != 'ADMIN'? this.router.navigate(['exam']): this.router.navigate(['admin/question']);
      });
  }

  createUser(examUser:ExamUser):Observable<{cugExamUser:ExamUser, jwt:string}>
  {
    return this.http.post<{cugExamUser:ExamUser, jwt:string}>(`${this.baseUrlUser}/create`, examUser);
  }

  setToSessionStorage(jwt:string, user?:string)
  {
    sessionStorage.setItem('cugExamJwt', jwt);
    sessionStorage.setItem('cugExam', user);
  }

  readJwt()
  {
      let jwt:string = sessionStorage.getItem('cugExamJwt');
      if(jwt?.length>3)
      {
        this.http.get(`${this.baseUrlUser}/jwt/${JSON.parse(atob(jwt.split('.')[1]) ).sub}`, new HttpHeader(jwt).getHeader())
          .subscribe((user:{cugExamUser:ExamUser, jwt:string})=>{
            user.cugExamUser.jwt = user.jwt;
            this.state.setExamUser(user.cugExamUser);
            this.setToSessionStorage(jwt, JSON.stringify(user.cugExamUser));
          
        },
        (error)=>
        {
          console.log(error);
          this.logout();
        }
        );
    }
  }

  logout()
  {
    this.state.setExamUser(null);
    sessionStorage.removeItem('cugExam');
    sessionStorage.removeItem('cugExamJwt');
  }
}
