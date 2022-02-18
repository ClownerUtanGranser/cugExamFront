import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class BaseInfoService {

  private baseUrl = "https://clown-exam.herokuapp.com/v1/auth"   //"http://localhost:8081/v1/auth"

  constructor(private http:HttpClient, private state:StateService) { }

  startingServer()
  {
    this.http.get(`${this.baseUrl}/wakeup`).subscribe((res)=> res);
  }

  setLang():void
  {
    this.state.getLang().subscribe((lang) =>{
      sessionStorage.setItem('cugLang', lang);
    })
    
  }

}
