import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  url:string;
  page:string;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
      this.url = param.material;
      this.page = param.page
      if(parseInt(this.page) < 1 ) this.router.navigate(['/course/material'])
    } )

  }

  nextPage()
  {
    console.log("Router: ", this.route.params);
    if(parseInt(this.page) > 0 )
    {
      this.router.navigate(['/course/material/',this.url, parseInt(this.page)  +1])
    }
    else
    {
      this.router.navigate(['/course/material'])
    }
    
  }

  previousPage()
  {
    
    if(parseInt(this.page) > 1 )
    {
      this.router.navigate(['/course/material/',this.url, parseInt(this.page)  -1])
    }
    else
    {
      console.log("Router1: ", this.route);
      this.router.navigate(['/course/material'])
    }
    
  }

}
