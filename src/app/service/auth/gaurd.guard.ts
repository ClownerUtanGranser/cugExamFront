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

      this.tokenStr = sessionStorage.getItem('cugExamJwt');
      this.user = JSON.parse(sessionStorage.getItem('cugExam'))
      if(this.tokenStr) this.tokenObj = JSON.parse(atob(this.tokenStr.split('.')[1]));

    


      if(route.routeConfig.path.includes('exam'))
      {
        if((Math.floor(new Date().getTime()/1000) > this.tokenObj?.exp || !this.tokenObj))
        {
          return this.router.navigate(['/login']);
        }
        else if(this.user?.roles.includes('USER'))  //Math.floor(new Date().getTime()/1000) > this.tokenObj?.exp( !this.tokenObj)
        {
          return true;
        }
        else if(this.user?.roles.includes('ADMIN'))
        {
          return true;
        }
        else
        {
          return this.router.navigate(['/login'])
        }
      }
      else if(route.routeConfig.path.includes('login'))
      {
        if(this.user?.roles.includes('USER') || this.user?.roles.includes('ADMIN'))
        {
          return this.router.navigate(['/exam']);
        }
        else
        {
          return true;
        }
      }
      else if(route.routeConfig.path.includes('admin'))
      {
        if((Math.floor(new Date().getTime()/1000) > this.tokenObj?.exp || !!this.tokenObj) && this.user?.roles.includes('USER'))
        {
          return this.router.navigate(['/exam'])
        }
        else if((Math.floor(new Date().getTime()/1000) > this.tokenObj?.exp || !!this.tokenObj) && this.user?.roles.includes('ADMIN'))
        {
          return true;
        }
        else
        {
          return this.router.navigate(['/login'])
        }
      }
      else
      {
        return this.router.navigate(['/login']);
      }

      // if( (Math.floor(new Date().getTime()/1000) > this.tokenObj?.exp || !this.tokenObj) && this.user?.roles != 'ADMIN' )
      // {
      //   return route.routeConfig.path == 'exam'? this.router.navigate(['/login']): this.router.navigate(['']);
      // }
      // else if((Math.floor(new Date().getTime()/1000) > this.tokenObj?.exp || !this.tokenObj) && this.user?.roles != 'ADMIN')
      // {
      //   return route.routeConfig.path.includes('ADMIN') ? this.router.navigate(['/login']): this.router.navigate(['']);
      // }
      // else if((Math.floor(new Date().getTime()/1000) > this.tokenObj?.exp || !this.tokenObj) && this.user?.roles == 'ADMIN')
      // {
      //   return route.routeConfig.path.includes('ADMIN') ? this.router.navigate(['/login']): this.router.navigate(['']);
      // }
      // else
      // {
      //   return true;
      // }

    
  }

  constructor( private router:Router){}
  
}
