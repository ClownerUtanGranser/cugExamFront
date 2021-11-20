import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleCugComponent } from './double-cug.component';

describe('DoubleCugComponent', () => {
  let component: DoubleCugComponent;
  let fixture: ComponentFixture<DoubleCugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleCugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleCugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
