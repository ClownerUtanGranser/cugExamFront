import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseInfoService {

  private baseUrl = "http://localhost:8081/v1/auth"

  constructor(private http:HttpClient) { }

  startingServer()
  {
    this.http.get(`${this.baseUrl}/wakeup`).subscribe((res)=> console.log(res));
  }
}
