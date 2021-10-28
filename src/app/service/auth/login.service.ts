import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Authentication } from 'src/app/model/authentication';
import { HttpHeader } from 'src/app/model/header';
import { StateService } from '../state.service';
import { ExamUser } from 'src/app/model/examUser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrlAuth = "http://localhost:8081/v1/auth";
  private baseUrlUser = "http://localhost:8081/v1/user";

  constructor(private http:HttpClient,
              private state:StateService
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
        this.state.setExamUser(user);
      });
  }
}
