import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipingCardsComponent } from './fliping-cards.component';

describe('FlipingCardsComponent', () => {
  let component: FlipingCardsComponent;
  let fixture: ComponentFixture<FlipingCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipingCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
