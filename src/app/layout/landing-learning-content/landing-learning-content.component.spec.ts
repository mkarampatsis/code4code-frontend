import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingLearningContentComponent } from './landing-learning-content.component';

describe('LandingLearningContentComponent', () => {
  let component: LandingLearningContentComponent;
  let fixture: ComponentFixture<LandingLearningContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingLearningContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingLearningContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
