import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, NavigationEnd, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { flatMap, filter } from 'rxjs/operators';
import { ExamUser } from 'src/app/model/examUser';
import { StateService } from '../state.service';

@Injectable({
  providedIn: 'root'
})
export class GaurdGuard implements CanActivate {


  user:ExamUser | null;
  tokenStr:string | null;
  tokenObj:any | null; 

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.state.examUser.subscribe((user)=> this.user = user);
      this.tokenStr = sessionStorage.getItem('cugExam');
      if(this.tokenStr) this.tokenObj = JSON.parse(atob(this.tokenStr.split('.')[1]));

      if( Math.floor(new Date().getTime()/1000) > this.tokenObj?.exp || !this.tokenObj )
      {
        return route.routeConfig.path == 'exam'? this.router.navigate(['/login']): this.router.navigate(['']);
      }
      else
      {
        return true;
      }

    
  }

  constructor(private state:StateService, private router:Router){}
  
}
