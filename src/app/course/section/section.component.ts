import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { dosAndDonts, DosAndDontsObj } from 'src/app/model/pageModel/dos-and-donts';
import { DoubleCug, DoubleCugObj } from 'src/app/model/pageModel/double-cug';
import { FlipingCards, FlipingCardsObj } from 'src/app/model/pageModel/fliping-cards';
import { PhotoText, PhotoTextObj } from 'src/app/model/pageModel/photoText';
import { Resources, ResourcesObj } from 'src/app/model/pageModel/resources';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  //PageObjects
  photoTextObj = new PhotoTextObj();
  doubleCugObj = new DoubleCugObj();
  ResourcesObj = new  ResourcesObj();
  flipingCardsObj = new FlipingCardsObj();
  dosAndDontsObj = new DosAndDontsObj();

  url:string;
  page:string;

  lang:string;

  //Section 1
  WELCOME_page2:PhotoText;
  introductionPurpose:DoubleCug;
  resources:Resources;
  preventionAndReactionToProtectChildrenEnsureSafetyOfChildren:dosAndDonts;
  cwbSwedenChildProtectionPolicy:PhotoText;

  //Section 2 working with children
  flipingCards:FlipingCards;
  prevention_and_reaction_to_protect_children_ensure_safety_of_children:dosAndDonts;
  dosAndDontsWhenWorkingWithChildren:dosAndDonts;
  safetyGuidelinesForLargeCrowds:PhotoText;
  scenario1SafetyGuidelinesForLargeCrowds:DoubleCug;
  whatIsViolence:PhotoText;
  largeCrowdsAtPerformances:PhotoText;
  scenario2LongtermWorkWithChildren:DoubleCug;
  actionPlanInCaseOfSuspectedCrimeAgainstChildren:PhotoText;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private state:StateService) { 

                this.state.getLang().subscribe((lang) =>{
                  this.lang = lang;
                  this.setPageLang();
                })

              }

  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
      this.url = param.material;
      this.page = param.page
      if(parseInt(this.page) < 1 ) this.router.navigate(['/course/material'])
    } )

    // this.state.getDoesAndDonts().subscribe((page) => this.page4 = page);
    // this.state.getPhotoText().subscribe((page) => this.page2 = page)
    // this.state.getSafetyGuidelinesForLargeCrowds().subscribe((page) => this.safetyGuidelinesForLargeCrowds = page);
    // this.state.getPreventionAndReactionToProtectChildrenEnsureSafetyOfChildren().subscribe((page) =>{
    //   this.preventionAndReactionToProtectChildrenEnsureSafetyOfChildren = page;
    // })
    // this.state.getCwbSwedenChildProtectionPolicy().subscribe((page)=> this.cwbSwedenChildProtectionPolicy = page);
  }

  nextPage()
  {
    
    if(parseInt(this.page) > 0 && parseInt(this.page)<10)
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
      // console.log("Router1: ", this.route);
      this.router.navigate(['/course/material'])
    }
    
  }

  setPageLang()
   {
      if(this.lang == 'SV')
      {
        this.WELCOME_page2  = this.photoTextObj.WELCOME_page2Sv;
        this.introductionPurpose = this.doubleCugObj.introductionPurposeSv
        this.resources = this.ResourcesObj.resourcesSv;
        this.flipingCards = this.flipingCardsObj.workingWithChildrenTheFoundationOfCwbSv
        this.safetyGuidelinesForLargeCrowds = this.photoTextObj.Safety_guidelines_for_large_crowdsSv
        this.prevention_and_reaction_to_protect_children_ensure_safety_of_children = this.dosAndDontsObj.prevention_and_reaction_to_protect_children_ensure_safety_of_childrenSv;
        this.cwbSwedenChildProtectionPolicy = this.photoTextObj.cwbSwedenChildProtectionPolicySv
        this.dosAndDontsWhenWorkingWithChildren = this.dosAndDontsObj.dosAndDontsWhenWorkingWithChildrenSv
        this.scenario1SafetyGuidelinesForLargeCrowds = this.doubleCugObj.scenario1SafetyGuidelinesForLargeCrowdsSv;
        this.whatIsViolence = this.photoTextObj.whatIsViolenceEng;
        this.largeCrowdsAtPerformances = this.photoTextObj.largeCrowdsAtPerformancesEng;
        this.scenario2LongtermWorkWithChildren = this.doubleCugObj.scenario2LongtermWorkWithChildrenEng
        this.actionPlanInCaseOfSuspectedCrimeAgainstChildren = this.photoTextObj.actionPlanInCaseOfSuspectedCrimeAgainstChildrenEng;

      }
      else if(this.lang == 'ENG')
      {
        this.WELCOME_page2 = this.photoTextObj.WELCOME_page2Eng
        this.introductionPurpose = this.doubleCugObj.introductionPurposeEng
        this.resources = this.ResourcesObj.resourcesEng;
        this.flipingCards = this.flipingCardsObj.workingWithChildrenTheFoundationOfCwbEng
        this.safetyGuidelinesForLargeCrowds = this.photoTextObj.Safety_guidelines_for_large_crowdsEng
        this.prevention_and_reaction_to_protect_children_ensure_safety_of_children = this.dosAndDontsObj.prevention_and_reaction_to_protect_children_ensure_safety_of_childrenEng;
        this.cwbSwedenChildProtectionPolicy = this.photoTextObj.cwbSwedenChildProtectionPolicyEng
        this.dosAndDontsWhenWorkingWithChildren = this.dosAndDontsObj.dosAndDontsWhenWorkingWithChildrenEng
        this.scenario1SafetyGuidelinesForLargeCrowds = this.doubleCugObj.scenario1SafetyGuidelinesForLargeCrowdsEng 
        this.whatIsViolence = this.photoTextObj.whatIsViolenceEng;
        this.largeCrowdsAtPerformances = this.photoTextObj.largeCrowdsAtPerformancesEng;
        this.scenario2LongtermWorkWithChildren = this.doubleCugObj.scenario2LongtermWorkWithChildrenEng
        this.actionPlanInCaseOfSuspectedCrimeAgainstChildren = this.photoTextObj.actionPlanInCaseOfSuspectedCrimeAgainstChildrenEng;


      }
      else
      {
        this.WELCOME_page2  = this.photoTextObj.WELCOME_page2Arb;
        this.introductionPurpose = this.doubleCugObj.introductionPurposeArb;
        this.resources = this.ResourcesObj.resourcesArb;
        this.flipingCards = this.flipingCardsObj.workingWithChildrenTheFoundationOfCwbArb
        this.safetyGuidelinesForLargeCrowds = this.photoTextObj.Safety_guidelines_for_large_crowdsArb;
        this.prevention_and_reaction_to_protect_children_ensure_safety_of_children = this.dosAndDontsObj.prevention_and_reaction_to_protect_children_ensure_safety_of_childrenArb;
        this.cwbSwedenChildProtectionPolicy = this.photoTextObj.cwbSwedenChildProtectionPolicyArb;
        this.dosAndDontsWhenWorkingWithChildren = this.dosAndDontsObj.dosAndDontsWhenWorkingWithChildrenArb
        this.scenario1SafetyGuidelinesForLargeCrowds = this.doubleCugObj.scenario1SafetyGuidelinesForLargeCrowdsArb 
        this.whatIsViolence = this.photoTextObj.whatIsViolenceEng;
        this.largeCrowdsAtPerformances = this.photoTextObj.largeCrowdsAtPerformancesEng;
        this.scenario2LongtermWorkWithChildren = this.doubleCugObj.scenario2LongtermWorkWithChildrenEng;
        this.actionPlanInCaseOfSuspectedCrimeAgainstChildren = this.photoTextObj.actionPlanInCaseOfSuspectedCrimeAgainstChildrenEng;

      }
   }

}
