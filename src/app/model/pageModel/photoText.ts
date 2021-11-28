export interface  PhotoText {
    headline:string, 
    headlineText?:string, 
    sectionText:string[], 
    points:string[]
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
        photoName:"photo"
    }
      

}