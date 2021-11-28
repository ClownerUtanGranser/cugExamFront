import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { dosAndDonts } from 'src/app/model/pageModel/dos-and-donts';
import { PhotoText } from 'src/app/model/pageModel/photoText';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  url:string;
  page:string;

  page2:PhotoText;
  page4:dosAndDonts;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private state:StateService) { }

  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
      this.url = param.material;
      this.page = param.page
      if(parseInt(this.page) < 1 ) this.router.navigate(['/course/material'])
    } )

    this.state.getDoesAndDonts().subscribe((page) => this.page4 = page);
    this.state.getPhotoText().subscribe((page) => this.page2 = page)
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
