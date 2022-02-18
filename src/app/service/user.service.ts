import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExamUser } from '../model/examUser';
import { HttpHeader } from '../model/header';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrlAdmin = "https://clown-exam.herokuapp.com/v1/admin" //"http://localhost:8081/v1/admin";
  private header:HttpHeader;

  constructor(
              private state:StateService,
              private http:HttpClient) { }

  getAllUsers(jwt:string):Observable<ExamUser[]>
  {  
    return this.http.get<ExamUser[]>(`${this.baseUrlAdmin}/users/all`, new HttpHeader(jwt).getHeader());
  }
}
