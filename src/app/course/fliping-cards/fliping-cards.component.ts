import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FlipingCards } from 'src/app/model/pageModel/fliping-cards';

@Component({
  selector: 'app-fliping-cards',
  templateUrl: './fliping-cards.component.html',
  styleUrls: ['./fliping-cards.component.scss']
})
export class FlipingCardsComponent implements OnInit, OnChanges {

  @Input() flipingCards:FlipingCards;
  @Input() lang:string;
  langCopy:string;
  flipingCardsCopy:FlipingCards;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.langCopy != this.lang)
    {
      this.langCopy = this.lang;
      this.flipingCardsCopy = {...this.flipingCards}  
    }
  }

  ngOnInit(): void {
    this.langCopy = this.lang;
    this.flipingCardsCopy = {...this.flipingCards}
  }

  turnCard( index:number, turned:boolean)
  {
    this.flipingCardsCopy.cards[index].turned = !this.flipingCardsCopy.cards[index].turned;
  }

  setCircleSize(circleSize:string):string
  {
    if(circleSize == 'S')
    {
      return "small-ball"
    }
    else if(circleSize == 'M'){
      return "medium-ball"
    }
    else
    {
      return "big-ball"
    }
  }

}
