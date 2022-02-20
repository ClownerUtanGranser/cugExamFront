import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CodeOfConduct, CodeOfConductObj } from 'src/app/model/pageModel/code-of-conduct';
import { dosAndDonts, DosAndDontsObj } from 'src/app/model/pageModel/dos-and-donts';
import { DoubleCug, DoubleCugObj } from 'src/app/model/pageModel/double-cug';
import { FlipingCards, FlipingCardsObj } from 'src/app/model/pageModel/fliping-cards';
import { PhotoText, PhotoTextObj } from 'src/app/model/pageModel/photoText';
import { Resources, ResourcesObj } from 'src/app/model/pageModel/resources';
import { WellDone, WellDoneObj } from 'src/app/model/pageModel/wellDone';
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
  codeOfConductObj = new CodeOfConductObj();
  wellDoneObj:WellDoneObj = new WellDoneObj()

  url:string;
  page:string;

  lang:string;

  menuOpen:string = 'Menu';

  //Section 1 introduction
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
  scenario2LongtermWorkWithChildrenGuideline:DoubleCug;
  actionPlanInCaseOfSuspectedCrimeAgainstChildren:PhotoText;
  preventingRisksWhenWorkingWithLargeCrowds:PhotoText;
  preventingRisksWhenWorkingWithLargeCrowds2:DoubleCug;
  scenario1SafetyGuidelinesForLargeCrowdsMarwa:dosAndDonts;
  scenario2LongtermWorkWithChildren:dosAndDonts;

  //Section CODE OF CONDUCT
  page1CodeOfConduct:PhotoText
  code1And2:CodeOfConduct;
  code3And4:CodeOfConduct;
  code5And6:CodeOfConduct;
  code7And8:CodeOfConduct;
  code9And10:CodeOfConduct;
  prohibitionOfAlcoholAndDrugs:FlipingCards;

  underStandCodeOfCunduct1:number = -1;
  underStandCodeOfCunduct2:number = -1;

  //DOCUMENTATION OF CHILDREN
  anExampleOfAPotentialSituation:FlipingCards;
  documentationOfChildrenPage1:PhotoText

  //whistle blower policy
  whistleBlowerPolicy:dosAndDonts

  //conclusion
  wellDone:WellDone;



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

  }

  nextPage()
  {

    if( parseInt(this.page)<=3 && this.url == 'introduction'){
      this.router.navigate(['/course/material/',this.url, parseInt(this.page)  +1])
    }
    else if( parseInt(this.page) > 3 && this.url == 'introduction'){
      this.url = 'working with children';
      this.page = '1'
      this.router.navigate(['/course/material/',this.url, this.page ])
      
    }
    else if(parseInt(this.page)<13 && this.url == 'working with children'){
      this.router.navigate(['/course/material/',this.url, parseInt(this.page)  +1])
    }else if( this.url == 'working with children'){
      this.url = 'code of conduct';
      this.page = '1'
      this.router.navigate(['/course/material/',this.url, this.page ])
      
    }else if( parseInt(this.page) < 7 && this.url == 'code of conduct'){
      this.underStandCodeOfCunduct1 = -1;
      this.underStandCodeOfCunduct2 = -1;
      this.router.navigate(['/course/material/',this.url, parseInt(this.page) + 1 ])
      
    }else if( parseInt(this.page) > 1 && this.url == 'code of conduct'){
      this.underStandCodeOfCunduct1 = -1;
      this.underStandCodeOfCunduct2 = -1;
      this.url = 'whistle blower policy';
      this.page = '1'
      this.router.navigate(['/course/material/',this.url, this.page ])
      
    }else if( parseInt(this.page) > 0 && this.url == 'whistle blower policy'){
      this.url = 'documentation of children';
      this.page = '1'
      this.router.navigate(['/course/material/',this.url, this.page ])
      
    }else if( parseInt(this.page) < 2 && this.url == 'documentation of children'){
      this.router.navigate(['/course/material/',this.url, parseInt(this.page) + 1 ])
      
    }else if( parseInt(this.page) == 2 && this.url == 'documentation of children'){
      this.url = 'conclusion';
      this.page = '1'
      this.router.navigate(['/course/material/',this.url, parseInt(this.page) + 1 ])
      
    }else{
      this.router.navigate(['/course/material'])
    }
    
  }

  previousPage()
  {
    if( parseInt(this.page)<=1 && this.url == 'introduction'){
      this.router.navigate(['/course/material'])
    }
    else if( parseInt(this.page) > 0 && this.url == 'introduction'){
      this.router.navigate(['/course/material/', this.url, parseInt(this.page) - 1 ]);

    }else if( parseInt(this.page) == 1 && this.url == 'working with children'){
      this.url = 'introduction';
      this.page = '4'
      this.router.navigate(['/course/material/',this.url, this.page ])
      
    }else if( parseInt(this.page) > 0 && this.url == 'working with children'){
      this.router.navigate(['/course/material/', this.url, parseInt(this.page) - 1 ]);
      
    }else if( parseInt(this.page) == 1 && this.url == 'code of conduct'){
      this.underStandCodeOfCunduct1 = -1;
      this.underStandCodeOfCunduct2 = -1;
      this.url = 'working with children';
      this.page = '13'
      this.router.navigate(['/course/material/',this.url, this.page ])
      
    }else if( parseInt(this.page) > 1 && this.url == 'code of conduct'){
      this.underStandCodeOfCunduct1 = -1;
      this.underStandCodeOfCunduct2 = -1;
      this.router.navigate(['/course/material/',this.url, parseInt(this.page) - 1 ])
      
    }else if( parseInt(this.page) == 1 && this.url == 'whistle blower policy'){
      this.url = 'code of conduct';
      this.page = '7'
      this.router.navigate(['/course/material/',this.url, this.page ])
      
    }else if( parseInt(this.page) == 1 && this.url == 'documentation of children'){
      this.url = 'whistle blower policy';
      this.page = '1'
      this.router.navigate(['/course/material/',this.url, parseInt(this.page) ])
      
    }else if( parseInt(this.page) > 1 && this.url == 'documentation of children'){
      this.router.navigate(['/course/material/',this.url, parseInt(this.page) - 1 ])
      
    }else if( this.url == 'conclusion'){
      this.url = 'documentation of children';
      this.page = '2'
      this.router.navigate(['/course/material/',this.url, parseInt(this.page) ]);
    }else{
      this.router.navigate(['/course/material'])
    }    
  }

  undertstandCodeOfConduct1(eventValue)
  {
    this.underStandCodeOfCunduct1 = eventValue; 
  }

  undertstandCodeOfConduct2(eventValue)
  {
    this.underStandCodeOfCunduct2 = eventValue;   
  }

  undetstandCodeOfConduct():string
  {
    if((parseInt(this.page) < 7 && parseInt(this.page) > 1 && this.url == 'code of conduct')){
      return this.underStandCodeOfCunduct1 == 1 && this.underStandCodeOfCunduct2 == 2 ? '' : 'dont-show';
    }else{
      return '';
    } 
  }

  showMenu(){
    this.router.navigate(['/course/material'])
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
        this.whatIsViolence = this.photoTextObj.whatIsViolenceSv;
        this.largeCrowdsAtPerformances = this.photoTextObj.largeCrowdsAtPerformancesSv;
        this.scenario2LongtermWorkWithChildrenGuideline = this.doubleCugObj.scenario2LongtermWorkWithChildrenGuidelineSv
        this.actionPlanInCaseOfSuspectedCrimeAgainstChildren = this.photoTextObj.actionPlanInCaseOfSuspectedCrimeAgainstChildrenSv;
        this.prohibitionOfAlcoholAndDrugs = this.flipingCardsObj.prohibitionOfAlcoholAndDrugsSv;
        this.anExampleOfAPotentialSituation = this.flipingCardsObj.anExampleOfAPotentialSituationSv;
        this.page1CodeOfConduct = this.photoTextObj.page1CodeOfConductSv;
        this.code1And2 = this.codeOfConductObj.code1And2Sv;
        this.code3And4 = this.codeOfConductObj.code3And4Sv;
        this.code5And6 = this.codeOfConductObj.code5And6Sv;
        this.code7And8 = this.codeOfConductObj.code7And8Sv;
        this.code9And10 = this.codeOfConductObj.code9And10Sv;
        this.documentationOfChildrenPage1 = this.photoTextObj.documentationOfChildrenPage1Sv;
        this.whistleBlowerPolicy = this.dosAndDontsObj.whistleBlowerPolicySv;
        this.preventingRisksWhenWorkingWithLargeCrowds = this.photoTextObj.preventingRisksWhenWorkingWithLargeCrowdsSv;
        this.preventingRisksWhenWorkingWithLargeCrowds2 = this.doubleCugObj.preventingRisksWhenWorkingWithLargeCrowds2Sv;
        this.scenario1SafetyGuidelinesForLargeCrowdsMarwa = this.dosAndDontsObj.scenario1SafetyGuidelinesForLargeCrowdsSv;
        this.scenario2LongtermWorkWithChildren = this.dosAndDontsObj.scenario2LongtermWorkWithChildrenSv;
        this.wellDone = this.wellDoneObj.wellDoneSv;
        this.menuOpen = "Meny"

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
        this.scenario2LongtermWorkWithChildrenGuideline = this.doubleCugObj.scenario2LongtermWorkWithChildrenGuidelineEng;
        this.actionPlanInCaseOfSuspectedCrimeAgainstChildren = this.photoTextObj.actionPlanInCaseOfSuspectedCrimeAgainstChildrenEng;
        this.prohibitionOfAlcoholAndDrugs = this.flipingCardsObj.prohibitionOfAlcoholAndDrugsEng;
        this.anExampleOfAPotentialSituation = this.flipingCardsObj.anExampleOfAPotentialSituationEng;
        this.page1CodeOfConduct = this.photoTextObj.page1CodeOfConductEng;
        this.code1And2 = this.codeOfConductObj.code1And2Eng;
        this.code3And4 = this.codeOfConductObj.code3And4Eng;
        this.code5And6 = this.codeOfConductObj.code5And6Eng;
        this.code7And8 = this.codeOfConductObj.code7And8Eng;
        this.code9And10 = this.codeOfConductObj.code9And10Eng;
        this.documentationOfChildrenPage1 = this.photoTextObj.documentationOfChildrenPage1Eng;
        this.whistleBlowerPolicy = this.dosAndDontsObj.whistleBlowerPolicyEng;
        this.preventingRisksWhenWorkingWithLargeCrowds = this.photoTextObj.preventingRisksWhenWorkingWithLargeCrowdsEng;
        this.preventingRisksWhenWorkingWithLargeCrowds2 = this.doubleCugObj.preventingRisksWhenWorkingWithLargeCrowds2Eng;
        this. scenario1SafetyGuidelinesForLargeCrowdsMarwa = this.dosAndDontsObj.scenario1SafetyGuidelinesForLargeCrowdsEng;
        this.scenario2LongtermWorkWithChildren = this.dosAndDontsObj.scenario2LongtermWorkWithChildrenEng;
        this.wellDone = this.wellDoneObj.wellDoneEng;
        this.menuOpen = 'Menu'

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
        this.whatIsViolence = this.photoTextObj.whatIsViolenceArb;
        this.largeCrowdsAtPerformances = this.photoTextObj.largeCrowdsAtPerformancesArb;
        this.scenario2LongtermWorkWithChildrenGuideline = this.doubleCugObj.scenario2LongtermWorkWithChildrenGuidelineArb;
        this.actionPlanInCaseOfSuspectedCrimeAgainstChildren = this.photoTextObj.actionPlanInCaseOfSuspectedCrimeAgainstChildrenArb;
        this.prohibitionOfAlcoholAndDrugs = this.flipingCardsObj.prohibitionOfAlcoholAndDrugsArb;
        this.anExampleOfAPotentialSituation = this.flipingCardsObj.anExampleOfAPotentialSituationArb;
        this.page1CodeOfConduct = this.photoTextObj.page1CodeOfConductArb;
        this.code1And2 = this.codeOfConductObj.code1And2Arb;
        this.code3And4 = this.codeOfConductObj.code3And4Arb;
        this.code5And6 = this.codeOfConductObj.code5And6Arb;
        this.code7And8 = this.codeOfConductObj.code7And8Arb;
        this.code9And10 = this.codeOfConductObj.code9And10Arb;
        this.documentationOfChildrenPage1 = this.photoTextObj.documentationOfChildrenPage1Arb;
        this.whistleBlowerPolicy = this.dosAndDontsObj.whistleBlowerPolicyArb;
        this.preventingRisksWhenWorkingWithLargeCrowds = this.photoTextObj.preventingRisksWhenWorkingWithLargeCrowdsArb;
        this.preventingRisksWhenWorkingWithLargeCrowds2 = this.doubleCugObj.preventingRisksWhenWorkingWithLargeCrowds2Arb;
        this.scenario1SafetyGuidelinesForLargeCrowdsMarwa = this.dosAndDontsObj.scenario1SafetyGuidelinesForLargeCrowdsArb;
        this.scenario2LongtermWorkWithChildren = this.dosAndDontsObj.scenario2LongtermWorkWithChildrenSvArb;
        this.wellDone = this.wellDoneObj.wellDoneArb;
        this.menuOpen = 'قائمة';

      }
   }

}
