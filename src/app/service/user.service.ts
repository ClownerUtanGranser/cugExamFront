import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExamUser } from '../model/examUser';
import { HttpHeader } from '../model/header';
import { StateService } from './state.service';
import { environment } from '../../environments/environment';
import {saveAs} from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrlAdmin = `${environment.hostURL}admin`
  private header:HttpHeader;

  constructor(
              private state:StateService,
              private http:HttpClient) { }

  getAllUsers(jwt:string):Observable<ExamUser[]>
  {  
    return this.http.get<ExamUser[]>(`${this.baseUrlAdmin}/users/all`, new HttpHeader(jwt).getHeader());
  }

  getAllUsersToExcel(jwt:string) {  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization' : `Bearer ${jwt}`
    }); 
    
    return this.http.post<Blob>(`${this.baseUrlAdmin}/users/all/excel`,
      {}, {headers: headers, responseType: 'blob' as 'json' })
      .subscribe(
        (val) => { 
          saveAs(val, 'all-users.xlsx');
        },
        response => {
          console.log("POST in error", response);
        },
        () => {
          console.log("POST observable is now completed.");
        });;
  }
}
