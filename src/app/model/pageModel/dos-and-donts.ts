export interface  dosAndDonts {
    headline:string, 
    headlineText:string, 
    doHeadline?:string
    dos?:string[], 
    dosText?:string[],
    dontHeadline?:string,
    donts?:string[],
    dontsText?:string[]
}

export class dosAndDontdText {

    page3:dosAndDonts = {
        headline: "WORKING WITH CHILDREN",
        headlineText:"Dos and don'ts when working with children",
        doHeadline:'Do',
        dos:[
          "Read carefully and understand the risk analysis before your assignment ",
          "Read carefully the Action Plan in case of suspicious crime",
          "Encourage children to raise their questions and concerns",
          "Implement the ”two adults rule” during all activities so that no adult is alone with a child",
          "Ensure that physical contact with children is always appropriate",
          "Use positive and non-violent methods to deal with children's behaviours",
          "Immediately raise concerns about inappropriate behaviours  "
        ],
        dontHeadline:'Dont',
        donts:[
          "Spend long periods with a child, isolated from other people",
          "Drink alcohol or drugs during your assignment",
          "Behave in a way that is offensive to children",
          "Use a offensive and hateful language against children",
          "Favor a child by giving gifts or promising something",
          "Take a child alone in a car",
          "Post photo or video of children on social media without theirs and their caregiver's consent"
        ]
    }


    prevention_and_reaction_to_protect_children_ensure_safety_of_children:dosAndDonts = {

      headline: "WORKING WITH CHILDREN",
        headlineText:"Prevention and reaction to protect children/ensure safety of children",
        dosText:[
          "PREVENTION:",
          "Working preventively is the foundation of our child protection work. By having clear preventive guidelines we ensure we always offer a safe environment for children. In our activities.",
          "",
          "CWB PREVENTIVE measures are:",
          " ",
          "- Quality control of all representatives working with children for CWB",
          "- Policies and guidelines to protect children",
          "- Risk analysis of activities/project",
          "- Guidelines for how to plan safe activities",
          "- Clear start up and onboarding routines for new projects/representatives",
          " ",
          "Read more in the: child protection policy"
        ],
        dontsText:[
          "REACTION",
          "By having clear reporting mechanisms we ensure that any crime or violation against children is taken seriously and reacted to.",
          " ",
          "CWB REACTIVE measures are:",
          " ",
          "- All representatives of CWB Sweden should know what to do in case one witness a suspected crime or something that is a risk to childrens safety.",
          "- We have an action plan in case of suspected crime",
          "- We have a whistle blower policy for anonymous reporting of irregularities",
          "- Read more in the: Action plan and Whistleblower policy"
        ]
    }
      

}