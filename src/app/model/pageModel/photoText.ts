export interface  PhotoText {
    headline:string, 
    headlineText?:string, 
    sectionText:string[], 
    points?:string[],
    circleText?:string,
    photoName:string
}

export class PhotoTextObj {

    page2:PhotoText = {
        headline: "WELCOME!",
        
        sectionText:[
          "As you have seen in the video Clowns without Borders is a children’s rights organisation whose dedicated to sharing emotional relief, laughter and play with children and communities in crisis around the world.",
          "Protecting children is an integral part of our mission and the best interest of the children always come first. When working with vulnerable people it is of outmost importance to ensure that our activities never cause harm.",
          "That is why we have developed this training for anyone working as a representative for CWB Sweden. Upon completion of the training you will understand:"
        ],
        points:[
          "- How to act as a good representative of CWB Sweden",
          "- What our core values, policies and guidelines are",
          "- How to work preventively to ensure safety of children",
          "- How to react and what to do if you witness a violation or crime against children"
        ],
        circleText:"If you have any questions after the training you can of course always reach out to your nearest point of contact at the organization.",
        photoName:"photo"
    }

    //Working with children

    Safety_guidelines_for_large_crowds:PhotoText = {
      headline: "WORKING WITH CHILDREN",

      headlineText:"Scenario 1: Safety guidelines for large crowds",
      
      sectionText:[
        "An example: Marwa is a CWB artist participating in a performance tour. She and her team has done all preparation according to the security protocol and artist handbook to ensure a safe activity.",
        "The audience consists of around 300 engaged children. Half way in to the show the children start expressing their excitement by being loud and standing up. As a result, the audience behind cannot see the stage area, and children start to fight between themselves. Despite trying to calm down the situation using CWB methods, the situation escalates and there is a clear risk that children are harmed. Local staff intervenes by smacking and hitting children. ",
        "What can Marwa do?"
      ],

      circleText: "Marwa makes a signal to her team to go to finale in the show to avoid further escalation and violence and withdrawal from the area.  Afterwards Marwa shall reach out to her point of contact for further follow up with partner organization. ",
      
      photoName:"photo"
  }

  cwbSwedenChildProtectionPolicy:PhotoText = {
    headline: "WORKING WITH CHILDREN",
    headlineText:"CWB Sweden Child protection policy",
        
        sectionText:[
          "CWB Sweden works to support the emotional wellbeing of children and communities in vulnerability. To ensure the safety of all children we have a Child protection policy. The aim of this policy is to give guidelines and support to anyone working with us. In short, everyone working with CWB Sweden should:"
        ],
        points:[
          "Understand the importance of child protection",
          "Always ensure children’s dignity and respect",
          "In all activities strive to strengthen psychosocial well being and rights of children",
          "Ensure a safe environment for all children participating in CWB activities",
          "Know ones obligations and commitments in a CWB-assignment"
        ],
        
        photoName:"photo"
  }
      

}