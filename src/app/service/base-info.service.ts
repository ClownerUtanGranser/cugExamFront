import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StateService } from './state.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseInfoService {

  private baseUrl =  `${environment.hostURL}auth`; 

  constructor(private http:HttpClient, private state:StateService) { }

  startingServer()
  {
    this.http.get(`${this.baseUrl}/wakeup`).subscribe();
  }

  setLang():void
  {
    this.state.getLang().subscribe((lang) =>{
      sessionStorage.setItem('cugLang', lang);
    })
    
  }

}
